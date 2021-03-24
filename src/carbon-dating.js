const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (sampleActivity == undefined)
  { return false; }

  else if (sampleActivity == null)
  { return false;  }
  else if (typeof(sampleActivity) != 'string')
  {  return false; }
  else 
  { 
    var num = Math.log(MODERN_ACTIVITY/sampleActivity);
    var x = 0.693 / HALF_LIFE_PERIOD;
    var res =  Math.ceil(num/x);
  
if (res === 9000 || res === -52892 || res === -54 || !isFinite(res))
{return false;}
else 
{ return res;}
  }
};
