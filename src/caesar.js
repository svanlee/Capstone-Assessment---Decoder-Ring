// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
        if (shift === 0 || shift < -25 || shift > 25 || shift === undefined)
      return false;
    if (encode === false) shift = shift - shift * 2;
    let lowerCaseInput = input.toLowerCase();
    let codedInput = [...lowerCaseInput].map((letter) => {
      let letterNum = letter.charCodeAt();
      if (letterNum < 97 || letterNum > 122)
        return String.fromCharCode(letterNum);
      let shiftedNum = letterNum + shift;
      if (shiftedNum < 97) shiftedNum += 26;
      if (shiftedNum > 122) shiftedNum -= 26;
      return String.fromCharCode(shiftedNum);
    });
    return codedInput.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
