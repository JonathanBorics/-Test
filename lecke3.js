const { doktorok, paciensek } = require("./lecke");
const korhazBajmok = require("./lecke2");
console.log(korhazBajmok.doktorok[1].paciensek[1].id);

const website = Number.parseInt("4123");
const website2 = Number.parseFloat("4123.45");
const kondicio = 4123 === website;
console.log("kondicio =", kondicio);

const website3 = {
  jani: 16,
  juli: 19,
};

const a = website3.jani;
const b = website3.juli;
if (a < 18 && b < 18) {
  console.log("no sex");
} else {
  console.log("idemo ");
}

const orvosoklistaja = [
  korhazBajmok.doktorok[0].nev,
  korhazBajmok.doktorok[1].nev,
];
console.log(orvosoklistaja);

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const szamok = [...lista1, ...lista2];
console.log(szamok);

for (let i = 0; i < szamok.length; i++) {
  console.log(szamok[i], ".  szam");
  console.log("----------");
}

const pacienseklistaja = [];

for (let i = 0; i < korhazBajmok.doktorok.length; i++) {
  pacienseklistaja.push(...korhazBajmok.doktorok[i].paciensek);
}

const medicine = [];

const Brufen = "brufen";
const Bensedin = "bensedin";
const Glucophage = "glucophage";
const Diclophen = "diclophen ";

for (let i = 0; i < pacienseklistaja.length; i++) {
  const nev = pacienseklistaja[i].nev;
  const suly = pacienseklistaja[i].suly;
  const kor = pacienseklistaja[i].kor;
  const magassag = pacienseklistaja[i].magassag;
  const insurance = pacienseklistaja[i].insurance;

  const gyogyszereklistaja = [];
  let paciensmagassag = Number.parseInt(magassag);
  let pacienskor = Number.parseInt(kor);
  let pacienssuly = Number.parseInt(suly);

  if (paciensmagassag > 175) {
    gyogyszereklistaja.push(Brufen);
  }

  if (pacienssuly < 70 && pacienskor < 30) {
    gyogyszereklistaja.push(Bensedin);
  }
  if (pacienssuly > 100 && insurance) {
    gyogyszereklistaja.push(Glucophage);
  }
  if (pacienskor > 60 && insurance) {
    gyogyszereklistaja.push(Diclophen);
  }

  medicine[nev] = gyogyszereklistaja.length > 0 ? gyogyszereklistaja : 0;
}

console.log(medicine);
