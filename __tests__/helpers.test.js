import { helpers } from "index";

describe("#params", () => {
  it("fetches ID from URL", () => {
    delete global.window.location;
    global.window.location = { href: "https://example.com/posts/1" };
    expect(helpers.params).toEqual({ id: 1 });
  });
});
