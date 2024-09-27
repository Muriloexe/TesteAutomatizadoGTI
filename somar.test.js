const somar = require("./somar");

test("soma 1 + 2 para igualar 3", () => {
  expect(somar(1, 2)).toBe(5);
});

test("soma -1 + 1 para igualar 0", () => {
  expect(somar(-1, 1)).toBe(0);
});
