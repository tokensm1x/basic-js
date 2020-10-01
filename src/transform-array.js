const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let obj = {
    deletePrev: '--discard-prev',
    deleteNext: `--discard-next`,
    doublePrev: `--double-prev`,
    doubleNext: `--double-next`,
  }
  let newArr = [];
  if (!Array.isArray(arr)) { throw new Error }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case obj.deletePrev:
        arr.splice(i - 1, 2);

      case obj.deleteNext:
        arr.splice(i, 2);

      case obj.doubleNext:
        arr.splice(i, 1, arr[i + 1]);

      case obj.doublePrev:
        arr.splice(i, 1, arr[i - 1]);

    }
  }
  return arr;
};
