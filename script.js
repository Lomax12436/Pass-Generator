// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandom(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var input = window.prompt(
    "How long do you want the passord to be? (must be between 8-128. Use numbers)"
  );
  var passLength = parseInt(input);
  var optionsContainer = [];
  if (isNaN(passLength)) {
    window.alert("I said NUMBERS!");
    return;
  }
  if (passLength < 8 || passLength > 128) {
    window.alert("I said.... BETWEEN 8 AND 128!");
    return;
  }
  var upper = window.confirm(
    "Do you care for uppercase letters in the password?"
  );
  var lower = window.confirm(
    "I see your opinion on uppercase, and what do you think of lowercase in the password?"
  );
  var num = window.confirm(
    "Interesting. Would you like to throw some numbers in there?"
  );
  var symbols = window.confirm(
    "Alright, and lastly what are your thoughts on symbols being included?"
  );
  var upperList = [
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
  ];
  var lowerList = [
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
  var numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  if (upper === true) {
    optionsContainer.push(upperList);
  }
  if (lower === true) {
    optionsContainer.push(lowerList);
  }
  if (num === true) {
    optionsContainer.push(numList);
  }
  if (symbols === true) {
    optionsContainer.push(symbolsList);
  }

  var completePass = "";

  for (var i = 0; i < passLength; i++) {
    var randomList = getRandom(optionsContainer);
    var randomChar = getRandom(randomList);
    completePass += randomChar;
  }

  return completePass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
