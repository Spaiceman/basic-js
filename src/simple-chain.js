const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length();
  },

  addLink(value) {
    if (value !== undefined) {
      this.array.push('( ' + value + ' )');
    } else {
      this.array.push('(  )');
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 0 || position > this.array.length - 1) {
      this.array = [];
      throw new Error('Error');
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
