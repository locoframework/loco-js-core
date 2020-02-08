const init = (Controllers, Env) => {
  const namespace_name = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-namespace");
  const controller_name = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-controller");
  const action_name = document
    .getElementsByTagName("body")[0]
    .getAttribute("data-action");

  Env.action = action_name;

  if (typeof Controllers[namespace_name] === "function") {
    Env.namespaceController = new Controllers[namespace_name]();
    if (typeof Controllers[namespace_name][controller_name] === "function") {
      Env.controller = new Controllers[namespace_name][controller_name]();
    }

    if (typeof Env.namespaceController.constructor.initialize === "function") {
      Env.namespaceController.constructor.initialize();
    }
    if (typeof Env.namespaceController.initialize === "function") {
      Env.namespaceController.initialize();
    }

    if (typeof Env.controller === "object") {
      Env.namespaceController.setSubController(Env.controller);
      Env.controller.setSuperController(Env.namespaceController);
      controllerFlow(Env.controller, action_name);
    }
  } else if (typeof Controllers[controller_name] === "function") {
    Env.controller = new Controllers[controller_name]();
    controllerFlow(Env.controller, action_name);
  }
};

const controllerFlow = (controller, action_name) => {
  if (typeof controller.constructor.initialize === "function") {
    controller.constructor.initialize();
  }
  if (typeof controller.initialize === "function") {
    controller.initialize();
  }

  if (typeof controller.constructor[action_name] === "function") {
    controller.constructor[action_name]();
  }
  if (typeof controller[action_name] === "function") {
    controller[action_name]();
  }
};

export default init;
