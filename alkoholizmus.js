function alkohol(alkoholszint) {
  if (alkoholszint >= 0.2) {
    return true;
  } else {
    return false;
  }
}
//console.log("alkoholszint meres", alkohol(0.1));
module.exports = {
  alkohol,
  haittas,
};

function haittas(alkoholszint) {
  if (alkoholszint > 0.5 && alkoholszint <= 1.5) {
    return "ittas";
  }
  if (alkoholszint > 1.5 && alkoholszint < 2.5) {
    return "reszeg";
  }
  if (alkoholszint > 2.5) {
    return "kampen";
  }
}
