'use strict';

export default class Storage {
  constructor(options) {
    options = options || {};
  }

  get() {
    throw new Error('Not implemented');
  }

  set() {
    throw new Error('Not implemented');
  }
}