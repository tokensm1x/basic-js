const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(num, speed) {
  let obj = {};
  obj.turns = Math.pow(2, num) - 1;
  obj.seconds = Math.floor(3600 * obj.turns / speed);
  return obj;
};
