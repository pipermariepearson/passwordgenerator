




// Assignment Code
var generateBtn = document.querySelector("#generate");

{
function pwLength(){

  var howMany = prompt("how many characters do you need");

  if (howMany > 8 && howMany < 128) {
  confirm("Your pass word will be " + howMany + " characters long.");
  console.log(howMany);
  } else {
    alert("Your password is either too long or too short. Please try again!");
  }
}
}

{
  function specialChara(){
    
    var special = confirm("do you need special characters?");

    if (special === true) {
      alert("Your password will have special characters in it." );
      console.log(special);
    } else {
      alert("Your password will NOT have special characters in it.");
      console.log(special);
    }
    }
  }



 



//Call functions

 pwLength();

 specialChara();

 
















// Write password to the #password input







function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





