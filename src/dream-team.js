const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false ||
    typeof (members) === undefined) {
    return false;
  } else {
    let dream = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) === 'string' && typeof (members[i]) !== 'number') {
        dream.push((members[i].trim().split('')[0].toUpperCase()));
        dream.sort();
      }
    }
    return dream.join('');
  }
};
