'use strict';

import { isObject, merge } from 'lodash';

const defaultFilter = () => true;
const subscribe = store => handler => store.subscribe(handler);

class VuexPersist {
  constructor() {}

  configure(options) {
    options = options || {};
    this.storage = options.storage;
    this.storageOptions = options.storageOptions;
    this.key = options.key || 'vuex-persist';
    this.filter = options.filter || defaultFilter;
    this.subscribe = subscribe;

    return this.persist;
  }

  persist(store) {
    const savedState = this.getState(this.key);
    if (isObject(savedState)) {
      store.replaceState(merge({}, store.state, savedState));
    }

    subscribe(store)((mutation, state) => {
      if (this.filter(mutation)) {
        this.setState(this.key, state);
      }
    });
  }

  getState(key) {
    return this.storage.get(key);
  }

  setState(key, state) {
    return this.storage.set(key, state, this.storageOptions);
  }
}

export default new VuexPersist().configure;