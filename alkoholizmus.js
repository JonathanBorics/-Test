const ITTAS = "ITTAS";
const RESZEG = "RESZEG";
const ALKOHOLMERGEZES = "ALKOHOLMERGEZES";
// elso funkcio
function drug(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}
//masodik funkcio
function ifDrug(alkoholszint) {
  if (alkoholszint > 0.5 && alkoholszint < 1.5) {
    return "ITTAS";
  }
  if (alkoholszint > 1.5 && alkoholszint < 2.5) {
    return "RESZEG";
  }
  if (alkoholszint >= 2.5) {
    return "ALKOHOLMERGEZES";
  }
}
//harmadik funkcio
function action(text) {
  switch (text) {
    case ITTAS: {
      console.log("on" + ITTAS);
      console.log("ne vezessen jarmuvet");
      break;
    }
    case RESZEG: {
      console.log("a kedves uriember" + " " + RESZEG);
      console.log("takarodjon aludn");
      break;
    }
    case ALKOHOLMERGEZES: {
      console.log("gyomormosasra kell kuldeni" + " " + ALKOHOLMERGEZES);
      console.log("vagy halott");
      break;
    }
  }
}
//4. funkcio
function mainfunction(alkoholszint) {
  const drug1 = drug(alkoholszint);
  if (drug1 === true) {
    const howDrunk = ifDrug(alkoholszint);
    action(howDrunk);
  }
}
mainfunction(2);
module.exports = {
  drug,
  ifDrug,
  action,
  RESZEG,
};
