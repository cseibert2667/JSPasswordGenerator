// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // character sets
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = lower.toUpperCase();
  var spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var num = "0123456789"
  var result = ""
  // prompt user for length of password
  var length = parseInt(prompt("How many characters?"))
  // check if length is valid (between 8-128)
  if (length < 8 || length > 128) {
    alert("Invalid response - Please choose a value between 8 and 128");
    return ("Invalid Parameters");
  }
  // prompt user for if they want special chars, numeric chars, uppercase chars and lowercase chars
  var useLower = confirm("Include lowercase letters?")
  var useUpper = confirm("Include uppercase letters?")
  var useNum = confirm("Include numbers?")
  var useSpec = confirm("Include special characters?")
  // build out password depending on what user chose
  for (let i = 0; i < length; i++) {
    if (useLower) {
      result += getRandomValue(lower);
    }
    if (useUpper) {
      result += getRandomValue(upper);
    }
    if (useSpec) {
      result += getRandomValue(spec);
    }
    if (useNum) {
      result += getRandomValue(num);
    }
  }
  // Return the result, cut it down to a substring that is the proper length
  result = result.substring(0, length);
  // Shuffles the end result (see declared function below)
  return shuffle(result);
}

// Function to pull a random value from a given string
function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Function for shuffling a string
function shuffle(str) {
  var shuffled = "";
  str = str.split("");
  while (str.length > 0) {
    shuffled += str.splice(getIndex(str), 1);
  }
  return shuffled;
}

// Function for generating a random index to pass into the .splice above
function getIndex(str) {
  for (let i = 0; i < str.length; i++) {
    var index = Math.floor(Math.random() * str.length)
  }
  return index;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);