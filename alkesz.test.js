const importalunk = require("./alkoholizmus");

describe("tesztelunk valami", () => {
  it("szoveg", () => {
    expect(importalunk.alkohol(2)).toEqual(true);
  });
});

describe("haittas", () => {
  it("ittas kene", () => {
    expect(importalunk.haittas(0.6)).toEqual("ittas");
  });
});
