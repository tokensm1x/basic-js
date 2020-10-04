const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined) this.arr.push(`( )`);
    else this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {

    if (typeof (position) !== 'number' || !Number.isInteger(position) || position > this.arr.length - 1) {
      this.arr = [];
      throw new Error;
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }

  },
  reverseChain() {
    this.arr.reverse();
    return this;

  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }

};


module.exports = chainMaker;
