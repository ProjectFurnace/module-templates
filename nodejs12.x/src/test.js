const handler = require("./index").handler;

require("dotenv").config();

describe("handler", () => {
  it("test handler success", async () => {
    const event = { a: "b" };
    const result = await handler(event);
    expect(result).toMatchObject(event);
  });
});
