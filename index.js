// const { name } = require("tar/lib/types");

// let myDate = document.getElementById("my-date");
let years = document.getElementById("years");
let months = document.getElementById("months");
let weeks = document.getElementById("weeks");
let days = document.getElementById("days");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
var name = document.getElementById("name");
var date = new Date();
// myDate.innerHTML = date.getFullYear();
function myFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    years.innerHTML = `Hello ${name.value}, you are ${
      date.getFullYear() - birthYear
    } years old`;
  }
}
function yearFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    months.innerHTML = `Hello ${name.value}, you are ${
      (date.getFullYear() - birthYear) * 12
    } months old`;
  }
}
function weeksFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    weeks.innerHTML = `Hello ${name.value}, you are ${
      (date.getFullYear() - birthYear) * 52
    } weeks old`;
  }
}
function daysFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    days.innerHTML = `Hello ${name.value}, you are ${
      (date.getFullYear() - birthYear) * 365
    } days old`;
  }
}
function hrsFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    hrs.innerHTML = `Hello ${name.value}, you are ${
      (date.getFullYear() - birthYear) * 365 * 24
    } hours old`;
  }
}
function minsFunction() {
  var birthYear = prompt("Enter your birth year");
  if (birthYear != null) {
    mins.innerHTML = `Hello ${name.value}, you are ${
      (date.getFullYear() - birthYear) * 365 * 24 * 60
    } minutes old`;
  }
}
