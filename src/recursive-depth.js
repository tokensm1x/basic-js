const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let newArr = arr;
    let count = 1;
    for(let key of newArr){
      if(key instanceof Array){
        newArr = newArr.flat();
        count += this.calculateDepth(newArr);
        break;
      }
    }
    return count;
  }
  };