const CustomError = require("../extensions/custom-error");

  module.exports = function repeater( str, options ) {

      if (options.separator === undefined) {
        options.separator = '+';
      }
      if (options.addition === undefined) {
        options.addition = '' ;
      } 
      if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
      }
      
      let st = options.addition;
      for (let x = 1; x < options.additionRepeatTimes; x++) {
        st = st + options.additionSeparator + options.addition;
      }
      let newSt = str + st;
      for (let x = 1; x < options.repeatTimes; x++) {
        newSt = newSt + options.separator + str + st;
      }
      return newSt;
    }; 
