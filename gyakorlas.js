// Diakok
const emberek1 = {
  nev: "Anna",
  kor: 21,
  magassag: 160,
  suly: 60,
  poszt: "diak",
  atlag: "4+",
};
const emberek2 = {
  nev: "Antal",
  kor: 22,
  magassag: 165,
  suly: 65,
  poszt: "diak",
  atlag: "3+",
};
const emberek3 = {
  nev: "Aron ",
  kor: 23,
  magassag: 169,
  suly: 68,
  poszt: "diak",
  atlag: "4",
};
const emberek4 = {
  nev: "Tamas",
  kor: 24,
  magassag: 170,
  suly: 70,
  poszt: "diak",
  atlag: "5+",
};
const emberek5 = {
  nev: "Tibor",
  kor: 20,
  magassag: 175,
  suly: 76,
  poszt: "diak",
  atlag: "2+",
};
const emberek6 = {
  nev: "Norbert",
  kor: 25,
  magassag: 180,
  suly: 80,
  poszt: "diak",
  atlag: "3",
};
const emberek7 = {
  nev: "Viktoria",
  kor: 26,
  magassag: 162,
  suly: 61,
  poszt: "diak",
  atlag: "5*",
};
const emberek8 = {
  nev: "Fanni",
  kor: 22,
  magassag: 163,
  suly: 63,
  poszt: "diak",
  atlag: "4*",
};

// Tanarok
const tanar1 = {
  nev: "Borisz",
  kor: 32,
  magassag: 181,
  suly: 82,
  poszt: "Tanar",
  eloadas: "Angol",
  osztalylista: [emberek1, emberek2],
};
const tanar2 = {
  nev: "Krisztian",
  kor: 31,
  magassag: 182,
  suly: 83,
  poszt: "Tanar",
  eloadas: "Programozas",
  osztalylista: [emberek3, emberek4],
};
const tanar3 = {
  nev: "Attila",
  kor: 33,
  magassag: 184,
  suly: 80,
  poszt: "Tanar",
  eloadas: "Kemia",
  osztalylista: [emberek5, emberek6],
};
const tanar4 = {
  nev: "Hanna",
  kor: 30,
  magassag: 171,
  suly: 68,
  poszt: "Tanar",
  eloadas: "Magyar",
  osztalylista: [emberek7, emberek8],
};
// Diakok listaja
const osztalylista = [
  emberek1,
  emberek2,
  emberek3,
  emberek4,
  emberek5,
  emberek6,
  emberek7,
  emberek8,
];
const osztaly = {
  osztalylista: [
    emberek1,
    emberek2,
    emberek3,
    emberek4,
    emberek5,
    emberek6,
    emberek7,
    emberek8,
  ],
};
// Tanarok listaja
const tanarlista = [tanar1, tanar2, tanar3, tanar4];
const tanarok = {
  tanarlista: [tanar1, tanar2, tanar3, tanar4],
};
const Iskola = {
  Adatok: {
    nev: "Vuk karadzic",
    alapitas: 1892,
    telepules: "Bajmok",
    iranyitoszam: 24210,
  },
  osztalylista: [
    emberek1,
    emberek2,
    emberek3,
    emberek4,
    emberek5,
    emberek6,
    emberek7,
    emberek8,
  ],
  tanarlista: [tanar1, tanar2, tanar3, tanar4],
};
console.log(Iskola.tanarlista[1].osztalylista[1].kor);
