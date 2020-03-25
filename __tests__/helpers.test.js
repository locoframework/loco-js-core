import { helpers } from "index";

describe("#params", () => {
  it("fetches ID from URL", () => {
    expect(helpers.params("https://example.com/posts/1")).toEqual({ id: 1 });
  });
});
