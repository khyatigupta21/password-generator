/**
 * @description - Generate Radom Password consisting of user entered number of characters,
 * numbers and symbols
 *
 * Example:
 *
 * After the user run the code, It must run in the following order -
 *
 * Enter the number of characters in password:
 * 3
 * Enter the number of numbers in password:
 * 2
 * Enter the number of symbols in password:
 * 3
 * The generated password is : A$X24y!
 *
 * NOTE:  the order of characters numbers and symbols should be same as shown above.
 */

var arrString = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrSymbol = ["!", "@", "#", "$", "&"];

//Function for Random Character
function generateRandomChar() {
  var resultChar = "";
  var countChar = document.getElementById("geneChar").value;
  for (i = 0; i <= countChar - 1; i++) {
    //get random index value
    const randomIndex = Math.floor(Math.random() * arrString.length);
    // get random element and concatenate
    resultChar += arrString[randomIndex];
  }
  return resultChar;
  //console.log(resultChar);
}

//Function for Random Number

function generateRandomNum() {
  var resultNum = "";
  var countNum = document.getElementById("geneNum").value;
  for (i = 0; i <= countNum - 1; i++) {
    //get random index value
    const randomIndex = Math.floor(Math.random() * arrNumber.length);
    // get random element and concatenate
    resultNum += arrNumber[randomIndex];
  }
  return resultNum;
  //console.log(resultSym);
}

//Function for Random Symbol

function generateRandomSym() {
  var resultSym = "";
  var countSym = document.getElementById("geneSym").value;
  for (i = 0; i <= countSym - 1; i++) {
    //get random index value
    const randomIndex = Math.floor(Math.random() * arrSymbol.length);
    // get random element and concatenate
    resultSym += arrSymbol[randomIndex];
  }
  return resultSym;
  //console.log(resultSym);
}

//Function to Generate Random Password

function randomPassword() {
  const randomCharacters = generateRandomChar();
  const randomNumber = generateRandomNum();
  const randomSymbols = generateRandomSym();
  const generatedPwd = randomCharacters + randomNumber + randomSymbols;
  alert(generatedPwd);
  const splitPwd = generatedPwd.split("");
  const finalResult = splitPwd.shuffle();
  alert(finalResult.join(""));
}

Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};
