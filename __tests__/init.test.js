import { init, Controllers } from "index";

let counter;

class Wrapper extends Controllers.Base {
  initialize() {
    counter += 1;
  }
}

class Main extends Controllers.Base {
  initialize(){
    counter += 2;
  }

  list() {
    counter += 3;
  }
}

Object.assign(Wrapper, { Main });
Object.assign(Controllers, { Wrapper });

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
