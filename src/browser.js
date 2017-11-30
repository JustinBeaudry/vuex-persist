'use strict';

import vault from 'vault.js';
import Storage from './storage';

const defaultStorageConfig = {
  domain: '/',
  expires: '1 year'
};

export default class Browser extends Storage {
  constructor(options) {
    options = options || {};
    options.storageOptions = options.storageOptions || defaultStorageConfig;
    super(options);
  }
}