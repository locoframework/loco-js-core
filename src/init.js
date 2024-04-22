let namespaceController = null;
let controller = null;

const callFunc = (resource, name) => {
  if (typeof resource.constructor[name] === "function") {
    resource.constructor[name]();
  }
  if (typeof resource[name] === "function") {
    resource[name]();
  }
};

const getController = (Controllers, name, subName) => {
  const resource =
    subName === undefined ? Controllers[name] : Controllers[name][subName];
  if (typeof resource === "function") {
    return new resource();
  } else if (typeof resource === "object") {
    return resource;
  }
  return null;
};

const init = (Controllers) => {
  const body = document.getElementsByTagName("body")[0];
  const namespaceName = body.getAttribute("data-namespace");
  const controllerName = body.getAttribute("data-controller");
  const actionName = body.getAttribute("data-action");

  if (controller !== null) {
    callFunc(controller, "deinitialize");
    controller = null;
  }
  if (namespaceController !== null) {
    callFunc(namespaceController, "deinitialize");
    namespaceController = null;
  }

  namespaceController = getController(Controllers, namespaceName);
  controller = getController(Controllers, controllerName);

  if (namespaceController !== null) {
    controller = getController(Controllers, namespaceName, controllerName);
    namespaceController.controller = controller;
    callFunc(namespaceController, "initialize");
  }
  if (controller !== null) {
    controller.namespaceController = namespaceController;
    callFunc(controller, "initialize");
    callFunc(controller, actionName);
  }

  return { namespaceController, controller, action: actionName };
};

export default init;
