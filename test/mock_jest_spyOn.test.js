import * as app from "../src/App";
import * as math from "../src/math"

test("llamando math.add", () => {
    const addMock = jest.spyOn(math, "add");
    // llamando a la implementacion original
    expect(app.doAdd(1, 2)).toEqual(3);
    // y el Spy alamcena y graba las llamadas 
    expect(addMock).toHaveBeenCalledWith(1,2);
});