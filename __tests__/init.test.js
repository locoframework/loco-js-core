import { init } from "index";

let counter;

const Wrapper = {
  initialize: () => {
    counter += 1;
  }
}

class Main {
  initialize(){
    counter += 2;
  }

  list() {
    counter += 3;
  }
}

const Controllers = {
  Wrapper: { ...Wrapper, Main }
};

beforeEach(() => {
  counter = 0;
});

it("calls out a correct controller action based on body attributes", () => {
  document.body.setAttribute('data-namespace', "Wrapper");
  document.body.setAttribute('data-controller', "Main");
  document.body.setAttribute('data-action', "list");

  expect(counter).toEqual(0);
  init(Controllers);
  expect(counter).toEqual(6);
});

it("allows accessing namespace controller and controller from each other", () => {
  const { namespaceController, controller, action } = init(Controllers);

  expect(namespaceController.controller).toBe(controller);
  expect(controller.namespaceController).toBe(namespaceController);
});
