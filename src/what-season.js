const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let dateTest = new Date(2150, 8, 24, 18, 36, 41, 841);
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (date.getMonth != dateTest.getMonth) {
    throw Error;
  } else {
    let month = date.getMonth();
    if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    } else return 'winter';
  }
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
