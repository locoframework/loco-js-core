class Base {
  constructor() {
    this.views = {};
    this.receivers = {};
    this.subController = null;
    this.superController = null;
    this.params = this.__fetchParams();
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

  setSubController(cntrlr) {
    this.subController = cntrlr;
  }

  getSubController() {
    return this.subController;
  }

  setSuperController(cntrlr) {
    this.superController = cntrlr;
  }

  getSuperController() {
    return this.superController;
  }

  __fetchParams(url = window.location.href) {
    const params = {};
    const match = /https?:\/\/.+\/\w+\/(\d+)/.exec(url);
    const id = match !== null ? match[1] : null;
    if (id !== null) {
      params["id"] = parseInt(id);
    }
    const splitUrl = url.split("?");
    if (splitUrl.length === 1) return params;
    const paramsString = splitUrl[splitUrl.length - 1];
    const paramsArray = paramsString.split("&").map(s => s.split("="));
    for (const arr of paramsArray) {
      let key = decodeURIComponent(arr[0]);
      let val = decodeURIComponent(arr[1]);
      if (typeof val === "string") {
        val = val.replace(/\+/g, " ");
      }
      params[key] = val;
    }
    return params;
  }
}

export default Base;
