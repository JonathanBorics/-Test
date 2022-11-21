const kocka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nevek = ["boki", "roxi", "tibi", "null ", "valami "];
const kocka1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function randomIntBetweenTwoNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function roll(dice) {
  const mau = [];
  for (let i = 0; i < dice.length; i++) {
    const kockaszam = [];
    kockaszam.push(randomIntBetweenTwoNumbers(0, dice[i].length - 1));
    // console.log("kockaszam", kockaszam);
    //console.log(dice[i][kockaszam]);
    // if (typeof dice[i][kockaszam] === "string") {
    //   mau.push(dice[i][kockaszam]);
    // } else mau.push(dice[i][kockaszam]);
    mau.push(dice[i][kockaszam]);
  }

  return mau;
}

console.log(roll([kocka, kocka1, kocka, nevek]));
//let nevek = ["boki", "roxi", "tibi", " ", " "];
//console.log(nevek);

/*const penzecskem = {
  tipus: "euro",
  ertek: 100,
};

function valtas(penz) {
  if (penz.tipus === "euro") {
    return penz.ertek * 117;
  } else if (penz.tipus === "din") {
    return penz.ertek / 115;
  }
}

function penzvalto(penz) {
  const valtottpenz = valtas(penz);
  return "koszonjuk,hogy nalunk valtott :" + valtottpenz;
}

const valtott = penzvalto(penzecskem);
console.log(valtott); */
