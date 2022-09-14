// let myDate = document.getElementById("my-date");
let age = document.getElementById("age");
var date = new Date();
// myDate.innerHTML = date.getFullYear();
function myFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    age.innerHTML = `You are ${date.getFullYear() - birthYear} years old`;
  }
}
