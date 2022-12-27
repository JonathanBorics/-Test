const a = 5;
const b = 3;

function osszeadas(e, v) {
  return e - v;
}

console.log(osszeadas(a, b));

//function ae(b) {
//  return "boldog szulcsit" + b;
//};
//console.log(ae("  peti "));
/*
const list = ["Rizs", "tojas", "hus"];
function fincs(list) {
  return "kajak amit szeretek " + list;
}
console.log(fincs(list));*/

//let a = {};
let c = [
  { nev: "karcsi", kor: 12 },
  { nev: "sziszi", kor: 23 },
];
let b = [
  {
    nev: "Dani",
    kor: 29,
  },
  {
    nev: "petyyyyi",
    kor: 34,
  },
  {
    nev: "Danoooi",
    kor: 209,
  },
  {
    nev: "petooooi",
    kor: 340,
  },
  {
    nev: "Dannnnni",
    kor: 2900,
  },
  {
    nev: "petiiiii",
    kor: 34000,
  },
];
//let v = {};

function ajde(konyvtar, lista) {
  for (let i = 0; i < lista.length; i++) konyvtar[lista[i].nev] = lista[i].kor;

  //for (let i = 0; i < cica.length; i++)
  //  konyvtar[cica[i].nev] = cica[i].kor;

  return konyvtar;
}

console.log("eredmeny", ajde());
