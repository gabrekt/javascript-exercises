const ftoc = function(temp) {
  let cTemp = 0;
  cTemp = ((temp - 32) * 5) / 9;
  cTempRounded = Math.round(cTemp * 10) / 10;
  cTempFixed = parseFloat(cTempRounded.toFixed(1));
  return cTempFixed
};

const ctof = function(temp) {
  let fTemp = 0 ;
  fTemp = (temp * 1.8) + 32;
  fTempRounded = Math.round(fTemp * 10) / 10;
  fTempFixed = parseFloat(fTempRounded.toFixed(1));
  return fTempFixed
};


console.log(ftoc(100))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
