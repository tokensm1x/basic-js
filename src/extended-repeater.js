const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let add;
  let addite;
  let newStr;
  let result;
  if (addition === undefined) {
    newStr = (str + separator).repeat(repeatTimes);
  } else {
    add = (addition + additionSeparator).repeat(additionRepeatTimes);
    addite = add.slice(0, add.length - additionSeparator.length);
    newStr = (str + addite + separator).repeat(repeatTimes);
  }
  result = newStr.slice(0, newStr.length - separator.length);

  return result;
};
