const handler = require("./index").handler;
 
describe("handler", () => {
	it("test success", () => {
        const event = { a: "b" }
        const result = handler(event);
        expect(result).toMatchObject(event);
	});
});