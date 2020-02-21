import { init, Controllers } from "index";

let working;

class Main extends Controllers.Base {
  list() {
    working = true;
  }
}

Object.assign(Controllers, { Main });

beforeEach(() => {
  working = false;
});

it("calls out a correct controller action based on body attributes", () => {
  document.body.setAttribute('data-controller', "Main");
  document.body.setAttribute('data-action', "list");

  expect(working).toBe(false);
  init(Controllers);
  expect(working).toBe(true);
});
