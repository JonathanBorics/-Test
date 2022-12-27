//const { paciensek } = require("./lecke");
//const korhaz = require("./lecke");
//console.log("csaaa", korhaz);

const korhazbajmok = require("./gyaki");

//console.log(Iskola);
const adat1 = [];
for (let i = 0; i < korhazbajmok.doktorok.length; i++) {
  adat1.push(...korhazbajmok.doktorok[i].paciensek);
  //console.log(i);
}
//  console.log(
//    "huuuu",
//    adat1.push(
//     { id: 23, nev: "jancsi", suly: 67 },
//     { id: 20, nev: "csacsi", suly: 90 }
//    )
//  );
// console.log(
//   "find",
//   adat1.find((adat1) => adat1.nev == "Csilla")
// );
// console.log(
//   "findindex",
//   adat1.findIndex((adat1) => adat1.nev == "Viola")
// );
// console.log(
//   "filter",
//   adat1.filter((adat1) => adat1.suly == 65)
// );
// console.log(
//   "filter",
//   adat1.filter((adat1) => adat1.suly < 100)
// );
//adat1.forEach((adat1) => console.log(adat1.nev));

//console.log(adat1.map((adat1) => ({ id: adat1.id, nev: adat1.nev })));

// console.log(
//   "some",
//   adat1.some((adat1) => adat1.id == 0)
// );

// console.log(
//   "sort",
//   adat1.sort((a, b) => a.suly - b.suly)
// );
// console.log(
//   "sort",
//   adat1.sort((a, b) => {
//     if (a.nev < b.nev) {
//       return -1;
//     }
//     if (a.nev > b.nev) {
//       return 1;
//     }
//     return 0;
//   })
// );
// console.log(
//   "unicode rendezve nevek szerint ",
//   adat1.sort((a, b) => a.nev.localeCompare(b.nev, "hu-HU"))
// );
