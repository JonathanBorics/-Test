const importalunk = require("./alkoholizmus");

/*describe("tesztelunk valami", () => {
  it("szoveg", () => {
    expect(importalunk.drug(2)).toEqual(true);
  });
});

describe("ifDrunk", () => {
  it("ittas kene", () => {
    expect(importalunk.ifDrug(0.6)).toEqual("ITTAS");
  });
});*/
describe("action", () => {
  it("RESZEG", () => {
    expect(importalunk.action(importalunk.RESZEG)).toEqual("takarodjon aludni");
  });
});
