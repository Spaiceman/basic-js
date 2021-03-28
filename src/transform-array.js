const CustomError = require("../extensions/custom-error");

 module.exports = function transform( arr ) {
    let result = [];
      for (let x = 0; x < arr.length; x++) {
        switch (arr[x]) {
          case '--double-next':
            if (x + 1 < arr.length) result.push(arr[x + 1]);
            break;
          case '--discard-next':
            x++;
            break;
          case '--double-prev':
            if ((x >= 1) && (arr[x - 2] != '--discard-next')) result.push(arr[x - 1]);
            break;
          case ('--discard-prev'):
            if ((x >= 1) && (arr[x - 2] != '--discard-next')) result.splice(-1, 1);
            break;
          default:
            result.push(arr[x]);
        }
      }
      return result;
  };
