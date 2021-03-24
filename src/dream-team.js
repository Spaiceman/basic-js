const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var currentteam = "";
  try {
  for (var member of members)
  {
    if (typeof member !== "string") continue;
    {
      var membersStr = member.split("").join("").trim();
      currentteam += membersStr[0].toUpperCase();
    }
  }
  }
  catch (TypeError)
    { return false; }
    return currentteam.split("").sort().join("");
  };
