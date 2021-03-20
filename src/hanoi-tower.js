const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  var colturns= Math.pow(2,disksNumber)-1;
  var time=Math.floor (colturns/(turnsSpeed/3600));
  var finaloutput= { turns: colturns, seconds: time  };
  return finaloutput;
}
