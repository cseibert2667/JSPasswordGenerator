// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  // prompt user for length of password
  // prompt user for if they want special chars, numeric chars, uppercase chars and lowercase chars
  
  // build out password depending on what user chose
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
