const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr,summa=0,result=[] ) {
    summa++
    result.push(summa)
    for (let x=0;x <arr.length; x++) {
      if (Array.isArray(arr[x])) {
        this.calculateDepth(arr[x],summa,result)
     } 
    }
    return Math.max(...result)
  }
};
