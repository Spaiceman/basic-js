const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(name = true) {
    this.name = name;
  }

  encrypt(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    if (text === undefined || key === undefined) {
      throw Error();
    }

    if (text.length > key.length) {
      let numberRepeat = Math.ceil(text.length / key.length);
      key = key.repeat(numberRepeat).slice(0, text.length);
    }
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let array = [];
    let kf = 0;
    for (let i = 0; i < text.length; i++) {
      let m = alph.indexOf(text[i]);
      let k = alph.indexOf(key[i - kf]);
      let resIndex = m + k;
      if (m === -1 || text[i] === " ") {
        array.push(text[i]);
        kf++;
      } else {
        array.push(alph[resIndex]);
      }
    }
    if (this.name) {
      return array.join("");
    }
    return array.reverse().join("");
  }

  decrypt(encryptedtext, key) {
    if (encryptedtext === undefined || key === undefined) {
      throw Error();
    }
    encryptedtext = encryptedtext.toUpperCase();
    key = key.toUpperCase();
    if (encryptedtext.length > key.length) {
      let numberRepeat = Math.ceil(encryptedtext.length / key.length);
      key = key.repeat(numberRepeat).slice(0, encryptedtext.length);
    }
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mass = [];
    let kf = 0;
    for (let i = 0; i < encryptedtext.length; i++) {
      let c = alph.indexOf(encryptedtext[i]);
      let k = alph.indexOf(key[i - kf]);
      let resIndex = c + 26 - k;
      if (c === -1 || encryptedtext[i] === " ") {
        mass.push(encryptedtext[i]);
        kf++;
      } else {
        mass.push(alph[resIndex]);
      }
    }
    if (this.name) {
      return mass.join("");
    }
    return mass.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
