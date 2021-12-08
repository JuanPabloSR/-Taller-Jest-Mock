import * as app from "../src/App";
import * as math from "../src/math"

// establecer todas las funciones del modulo jest.fn

jest.mock("../src/math.js");
test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });
  test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
