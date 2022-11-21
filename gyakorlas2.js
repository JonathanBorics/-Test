//const { osztalylista } = require("./gyakorlas");
//const Iskola = require("./gyakorlas");
//console.log(Iskola.osztalylista);
const korhazBajmok = require("./lecke2");
//console.log(korhazBajmok);

const pacienseklistaja = [];

for (let i = 0; i < korhazBajmok.doktorok.length; i++) {
  pacienseklistaja.push(...korhazBajmok.doktorok[i].paciensek);
}

const medicine = [];

const Brufen = "brufen ";
const bensedin = "bensedin";
const Glucophage = "glucophage";
const Diclophen = "diclophen";

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
    gyogyszereklistaja.push(bensedin);
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
