const callInitialize = resource => {
  if (typeof resource.constructor.initialize === "function") {
    resource.constructor.initialize();
  }
  if (typeof resource.initialize === "function") {
    resource.initialize();
  }
};

const controllerFlow = (controller, actionName) => {
  callInitialize(controller);

  if (typeof controller.constructor[actionName] === "function") {
    controller.constructor[actionName]();
  }
  if (typeof controller[actionName] === "function") {
    controller[actionName]();
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

const init = Controllers => {
  const body = document.getElementsByTagName("body")[0];
  const namespaceName = body.getAttribute("data-namespace");
  const controllerName = body.getAttribute("data-controller");
  const actionName = body.getAttribute("data-action");

  let namespaceController = getController(Controllers, namespaceName);
  let controller = getController(Controllers, controllerName);

  if (namespaceController !== null) {
    controller = getController(Controllers, namespaceName, controllerName);
    namespaceController.controller = controller;
    callInitialize(namespaceController);
  }
  if (controller !== null) {
    controller.namespaceController = namespaceController;
    controllerFlow(controller, actionName);
  }

  return { namespaceController, controller, action: actionName };
};

export default init;
