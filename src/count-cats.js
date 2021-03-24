const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let catcount=0;
  const catears= "^^";
  for (let i=0;i <array.length;i++)
  {
    for (let x=0; x<array[i].length;x++)
    {
      if (array[i][x] == catears)
      {
        catcount++;
      }
    }
  }
return catcount;
};
