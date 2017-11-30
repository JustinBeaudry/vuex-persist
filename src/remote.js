'use strict';

import fetch from 'whatwg-fetch';
import Storage from './storage';

export default class Remote extends Storage {
  constructor(options) {
    super(options);
  }
}