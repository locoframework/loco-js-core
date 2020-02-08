const init = (Controllers, Env) => {
  const namespaceName = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-namespace");
  const controllerName = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-controller");
  const actionName = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-action");

  Env.action = actionName;

  if (typeof Controllers[namespaceName] === "function") {
    Env.namespaceController = new Controllers[namespaceName]();
    if (typeof Controllers[namespaceName][controllerName] === "function") {
      Env.controller = new Controllers[namespaceName][controllerName]();
    }

    callInitialize(Env.namespaceController);

    if (typeof Env.controller === "object") {
      Env.namespaceController.setSubController(Env.controller);
      Env.controller.setSuperController(Env.namespaceController);
      controllerFlow(Env.controller, actionName);
    }
  } else if (typeof Controllers[controllerName] === "function") {
    Env.controller = new Controllers[controllerName]();
    controllerFlow(Env.controller, actionName);
  }
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
