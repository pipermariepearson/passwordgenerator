// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passCriteria (){
  
  var length =  prompt("What is the length of your new password?");
   if (length > 8 && length < 128) {
     prompt("lowercase, uppercase, numeric, and/or special characters");
   } else {
     alert("password is too short or too long");
   }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click",passCriteria);

passCriteria;


