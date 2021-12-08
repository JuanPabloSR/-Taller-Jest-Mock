import * as app from "../src/app";
import * as math from "../src/math";

math.add = jest.fn();
math.subtract = jest.fn();

test("llamando a  math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("llamando a math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});