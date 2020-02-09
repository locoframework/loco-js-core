class Base {
  constructor(opts = {}) {
    this.views = {};
    this.intervals = {};
    this.receivers = {};
    this.controller = null;
    this.delegator = null;
    if (opts.controller !== undefined) {
      this.setController(opts.controller);
    }
    if (opts.delegator !== undefined) {
      this.setDelegator(opts.delegator);
    }
  }

  setController(cntr) {
    this.controller = cntr;
  }

  getController() {
    return this.controller;
  }

  setView(key, view) {
    this.views[key] = view;
  }

  getView(key) {
    return this.views[key];
  }

  getViews() {
    return this.views;
  }

  setDelegator(delegator) {
    this.delegator = delegator;
  }

  getDelegator() {
    return this.delegator;
  }
}

export default Base;
