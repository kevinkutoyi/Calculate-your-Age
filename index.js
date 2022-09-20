// let myDate = document.getElementById("my-date");
let years = document.getElementById("years");
let months = document.getElementById("months");
let weeks = document.getElementById("weeks");
let days = document.getElementById("days");
let hrs = document.getElementById("hrss");
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
function weeksFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    weeks.innerHTML = `You are ${
      (date.getFullYear() - birthYear) * 52
    } weeks old`;
  }
}
function daysFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    days.innerHTML = `You are ${
      (date.getFullYear() - birthYear) * 365
    } days old`;
  }
}
function hrsFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    hrs.innerHTML = `You are ${
      ((date.getFullYear() - birthYear) * 365) * 24
    } hours old`;
  }
}
