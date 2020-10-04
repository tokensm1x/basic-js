const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let obj = {
    deletePrev: '--discard-prev',
    deleteNext: `--discard-next`,
    doublePrev: `--double-prev`,
    doubleNext: `--double-next`,
  }

  if (!Array.isArray(arr) || !arr) { throw new Error}
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      
      case obj.doubleNext:
      if(i  < arr.length - 1)  newArr.push(arr[i + 1]) 
      break;

      case obj.doublePrev:
      if(i >= 1 && arr[i - 2] !== obj.deleteNext){
        newArr.push(arr[i - 1]);
      }
      break;

      case obj.deleteNext:
      i++;
      break;

      case obj.deletePrev:
      if(i >= 1 && arr[i - 2] !== obj.deleteNext){
        newArr.splice(newArr.length - 1 , 1);
      }
      break;

      default:
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
