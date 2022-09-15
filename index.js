// let myDate = document.getElementById("my-date");
let years = document.getElementById("years");
let months = document.getElementById("months");
var date = new Date();
// myDate.innerHTML = date.getFullYear();
function myFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    years.innerHTML = `You are ${date.getFullYear() - birthYear} years old`;
  }
}
function yearFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    months.innerHTML = `You are ${
      (date.getFullYear() - birthYear) * 12
    } months old`;
  }
}
