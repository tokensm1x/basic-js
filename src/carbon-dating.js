const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string' ||
    typeof (sampleActivity) !== 'number' ||
    sampleActivity < 0) {
    return false;
  } else {
    let activity = MODERN_ACTIVITY / sampleActivity;
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(activity) / k);
  }
};
