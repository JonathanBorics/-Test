





const paciens1 = {
    nev: "Szabina",
    kor: 23,
    id: 1234,
    betgseg: "torok fajas",
};
const paciens2 = {
    nev: "joska",
    kor: 24,
    id: 12345,
    betgseg: "has fajas",
};
const paciens3 = {
    nev: "Szandra",
    kor: 25,
    id: 1233,
    betgseg: "fej fajas",
};
const paciens4 = {
    nev: "Sanyi",
    kor: 21,
    id: 12344,
    betgseg: "lab fajas",
};
const paciens5 = {
    nev: "bandi",
    kor: 27,
    id: 123456,
    betgseg: "nyak fajas",
};
const paciens6 = {
    nev: "Szebi",
    kor: 28,
    id: 123455,
    betgseg: "kz fajas",
};
const paciens7 = {
    nev: "karcsi",
    kor: 29,
    id: 12349,
    betgseg: "szem fajas",
};
const paciensek = [
    paciens1, paciens2, paciens3, paciens4, paciens5, paciens6, paciens7
];



const doktor1 = {
    nev: "Ivana",
    kor: 21,
    hajszin: "fekete",
    paciensek: paciens6, paciens7

};

const doktor2 = {
    nev: "Fanni",
    kor: 22,
    hajszin: "szoke",

    paciensek: paciens1, paciens2

};

const doktor3 = {
    nev: "Karolina",
    kor: 47,
    hajszin: "Szokes-barna",
    paciensek: paciens3, paciens5

};
const doktorok = [
    doktor1, doktor2, doktor3
];


const korhaz = {
    nev: "bajmokkorhaz",
    id: 24210,
    alapitas: 1970,
    igazgato: "Roxi",

    doktorok: doktorok,

    paciensek: paciensek,

};

module.exports = korhaz;
console.log();


















