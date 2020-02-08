const init = Controllers => {
  const namespaceName = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-namespace");
  const controllerName = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-controller");
  const actionName = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-action");

  let namespaceController = null;
  let controller = null;

  if (typeof Controllers[namespaceName] === "function") {
    namespaceController = new Controllers[namespaceName]();
    if (typeof Controllers[namespaceName][controllerName] === "function") {
      controller = new Controllers[namespaceName][controllerName]();
    }

    callInitialize(namespaceController);

    if (typeof controller === "object") {
      namespaceController.setSubController(controller);
      controller.setSuperController(namespaceController);
      controllerFlow(controller, actionName);
    }
  } else if (typeof Controllers[controllerName] === "function") {
    controller = new Controllers[controllerName]();
    controllerFlow(controller, actionName);
  }

  return { namespaceController, controller, action: actionName };
};

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

export default init;
