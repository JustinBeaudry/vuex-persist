'use strict';

import dexie from 'dexie';
import Storage from './storage';

export default class IndexedDB extends Storage {
  constructor(options) {
    super(options);
  }
}