import * as app from "../src/App";
import * as math from "../src/math"

test("llamando math.add", () => {
    const addMock = jest.spyOn(math, "add");
    //  override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
});

//En otros casos podemos simular la función para mockear su funcionamiento, pero restaurar la implementación original en algún momento. 
