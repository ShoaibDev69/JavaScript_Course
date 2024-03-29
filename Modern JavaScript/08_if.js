// Example - 1

let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) {
  alert("You are right!");
  alert("You are really smart!");
}

// Example - 2

let year2 = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year2 == 2015) {
  alert("You are right!");
} else {
  alert("How can you be so wrong?");
}

// Example - 3

let year3 = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year3 > 2015) {
  alert("Too early...");
} else if (year3 < 2015) {
  alert("Too Late...");
} else {
  alert("Exactly!");
}

// Example - 4 : Conditional Operator '?'

let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// Example - 5 : Terinary Operator '?'

let ageTernary = ageTernary > 18 ? true : false;
alert(ageTernary);

let ageTernary2 = ageTernary2 > 18; // without if statement (same as above) (if ageTernary2 > 18 is true then ageTernary2 = true)

// Example - 6 : Multiple '?'

let age = prompt("age?", "");

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);

// By using if-else

let age = prompt("age?", "");

if (age < 3) {
  alert("Hi, baby!");
} else if (age < 18) {
  alert("Hello!");
} else if (age < 100) {
  alert("Greetings!");
} else {
  alert("What an unusual age!");
}

// Example - 7 : Non-traditional use of '?'

let company = prompt("Which campany created JavaScript?", "");

company == "Netscape" ? alert("Right!") : alert("Wrong.");

// By using if-else

let company = prompt("Which company created JavaScript?", "");

if (company == "Netscape") {
  alert("Right");
} else {
  alert("Wrong");
}

// Tasks

// Task - 1

if ("0") {
  alert("Hello");
} // Yes, it will alert because "0" is a string and it is not empty string. So, it is true.

// Task - 2

let name = prompt("What is the “official” name of JavaScript?", "");

if (name == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

// Task - 3 : Show the sign

let number = prompt("Enter a Number", "");

if (number > 0) {
  alert("1");
} else if (number < 0) {
  alert("-1");
} else {
  alert("0");
}

// Task - 4 : Rewrite 'if' into '?'

let result = 20 % 2 == 0 ? "Even" : "Odd";
alert(result);

// Task - 5 : Rewrite 'if..else' into '?'

let message =
  Login == "Employee"
    ? "Hello"
    : Login == "Director"
    ? "Greetings"
    : Login == ""
    ? "No Login"
    : "";
