const { NotImplementedError } = require("../extensions/index.js");

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

const alfabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

class VigenereCipheringMachine {
  constructor(directMode = true) {
    this.directMode = directMode;
  }

  encrypt(word, key) {
    if(word === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const wordIndex = word.split("").map((letter) => {
      const index = alfabet.indexOf(letter.toUpperCase());

      return index === -1 ? letter : index;
    });

    const keyIndex = key
      .split("")
      .map((letter) => alfabet.indexOf(letter.toUpperCase()));

    let encryptWord = "";

    for (let i = 0, b = 0; i < wordIndex.length; i++, b++) {
      b %= keyIndex.length;

      const letterIndex = wordIndex[i];
      const keyLetterIndex = keyIndex[b];

      if (typeof letterIndex === "string") {
        b--;
        encryptWord += letterIndex;
        continue;
      }

      const indexSum = (letterIndex + keyLetterIndex) % 26;
      encryptWord += alfabet[indexSum];
    }

    return !this.directMode
      ? encryptWord.split("").reverse().join("")
      : encryptWord;
  }

  decrypt(word, key) {
    if(word === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const wordIndex = word.split("").map((letter) => {
      const index = alfabet.indexOf(letter.toUpperCase());

      return index === -1 ? letter : index;
    });

    const keyIndex = key
      .split("")
      .map((letter) => alfabet.indexOf(letter.toUpperCase()));

    let decryptWord = "";

    for (let i = 0, b = 0; i < wordIndex.length; i++, b++) {
      b %= keyIndex.length;

      const letterIndex = wordIndex[i];
      const keyLetterIndex = keyIndex[b];

      if (typeof letterIndex === "string") {
        b--;
        decryptWord += letterIndex;
        continue;
      }

      const indexDifference = (letterIndex - keyLetterIndex + 26) % 26;
      decryptWord += alfabet[indexDifference];
    }

    return !this.directMode
      ? decryptWord.split("").reverse().join("")
      : decryptWord;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
