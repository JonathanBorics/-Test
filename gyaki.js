const paciens1 = {
  nev: "Csilla",
  kor: 23,
  magassag: 168,
  suly: 65,
  id: 1,
  insurance: true,
};
const paciens2 = {
  nev: "Viola",
  kor: 40,
  magassag: 165,
  suly: 65,
  id: 2,
  insurance: false,
};
const paciens3 = {
  nev: "Gyuri",
  kor: 48,
  magassag: 186,
  suly: 97,
  id: 3,
  insurance: true,
};
const paciens4 = {
  nev: "Viktor",
  kor: 30,
  magassag: 170,
  suly: 102,
  id: 4,
  insurance: true,
};
const paciens5 = {
  nev: "Erzsebet",
  kor: 64,
  magassag: 154,
  suly: 140,
  id: 5,
  insurance: true,
};
const paciens6 = {
  nev: "Peter",
  kor: 74,
  magassag: 162,
  suly: 54,
  id: 6,
  insurance: true,
};
const paciens7 = {
  nev: "Szanella",
  kor: 21,
  magassag: 194,
  suly: 69,
  id: 7,
  insurance: true,
};
const paciens8 = {
  nev: "Keisztian",
  kor: 25,
  magassag: 183,
  suly: 170,
  id: 8,
  insurance: true,
};
const doktor1 = {
  nev: "Bertalan",
  paciensek: [paciens1, paciens2, paciens5, paciens6],
};
const doktor2 = {
  nev: "Jozsef",
  paciensek: [paciens3, paciens4, paciens7, paciens8],
};
const korhazbajmok = {
  nev: "st-bajmok",
  doktorok: [doktor1, doktor2],
};
module.exports = korhazbajmok;
