import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    //build array with eng alphabet
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    // reformat params
    let m = message.toUpperCase().split("");
    let k = key.toUpperCase().split("");

    // calculate result
    let result = [];
    let j = 0;

    for (let i = 0; i < m.length; i++) {
      // if symbol isn't a letter, just add it and go on
      if (alphabet.indexOf(m[i]) === -1) {
        result.push(m[i]);
        continue;
      }

      let sum = alphabet.indexOf(m[i]) + alphabet.indexOf(k[j]);
      let finIndex = -1;

      if (alphabet.length - 1 - sum < 0) {
        finIndex = Math.abs(alphabet.length - 1 - sum) - 1;
      } else {
        finIndex = sum;
      }

      result.push(alphabet[finIndex]);

      j++;
      if (j === k.length) j = 0;
    }

    return this.reverse === false ? result.reverse().join("") : result.join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    //build array with eng alphabet
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    // reformat params
    let m = message.toUpperCase().split("");
    let k = key.toUpperCase().split("");

    // calculate result
    let result = [];
    let j = 0;

    for (let i = 0; i < m.length; i++) {
      // if symbol isn't a letter, just add it and go on
      if (alphabet.indexOf(m[i]) === -1) {
        result.push(m[i]);
        continue;
      }

      let mI = alphabet.indexOf(m[i]);
      let kI = alphabet.indexOf(k[j]);

      let finIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
      if (finIndex < 0) {
        finIndex = alphabet.length + finIndex;
      }

      result.push(alphabet[finIndex]);

      j++;
      if (j === k.length) j = 0;
    }

    return this.reverse === false ? result.reverse().join("") : result.join("");
  }
}
