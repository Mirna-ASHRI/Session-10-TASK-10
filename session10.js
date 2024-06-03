// Task-Session

const [pageTitle, pageDescription, pageDate] = [
  "JavaScript",
  "Front-end Development",
  "02/06/2024",
];
const page = `
<div>
<h3>${pageTitle}</h3>
<p>${pageDescription}</p>
<span>${pageDate}</span>
</div>
`;

let pageContent = page.repeat(4);
document.write(pageContent);

// Tasks File
// Task 1

console.log(100 == "100");
console.log(100 <= 1000);
console.log(110 >= 100 >= 10 <= 20);
console.log(-10 !== "-10");
console.log(-50 <= +"-40");
console.log(-10 <= -"-40"); 
console.log(-"10" <= 10);
console.log(!20 == false); 

// Task 2

let num1 = 10;
let num2 = 20;

console.log(num1 <= num2); 
console.log(num2 >= num1);
console.log(num1 != num2);
console.log(num2 != num1);
console.log(num1 !== num2);
console.log(num2 !== num1);
console.log(num1 <= num2 && num1 !== num2);
console.log(num2 === num1 || num2 >= num1); 

// Task 3 

let a = 20;
let b = 30;
let c = 10;

console.log((a != b && a >= c) || a <= b);
console.log(a <= b || a >= c);
console.log(!(a >= b) && !(a == b) && !(a == c) && !(a === c));

// Task 4

let numb = 9;
if (numb < 10) {
  console.log(`00${numb}`);
}

let numb2 = 20;
if (numb2 > 10 && numb2 < 100) {
  console.log(`0${numb2}`);
}
let numb3 = 110;
if (numb3 >= 100) {
  console.log(numb3);
}

// Task 5

let number1 = 9;
let str = "9";
let str2 = "20";

if (number1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (number1 == str && number1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (number1 != str2 || number1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str === typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// Task 6

let numbo1 = 10;
let numbo2 = 30;
let numbo3 = "30";

if (numbo3 > numbo1 && numbo3 === numbo2) {
  console.log("All's not OK!");
} else if (numbo3 < numbo1 && numbo3 == numbo2 && numbo3 !== numbo2) {
  console.log("All's not OK!");
} else if (numbo3 !== numbo1 && typeof numbo3 != typeof numbo2) {
  console.log("All's OK!");
}

// Task 7

let X1 = 2;
let X2 = 1;
let X3 = 2;
let X4 = 24;

if (X1 > X2) {
  console.log("True");
} else {
  console.log("False");
}

if (X1 > X2 && X1 < X4) {
  console.log("True");
} else {
  console.log("False");
}

if (X1 > X2 && X1 === X3) {
  console.log("True");
} else {
  console.log("False");
}

if (X1 + X2 < X4) {
  console.log("True");
} else {
  console.log("False");
}

if (X1 + X3 < X4) {
  console.log("True");
} else {
  console.log("False");
}

if (X1 + X2 + X3 < X4) {
  console.log("True");
} else {
  console.log("False");
}

if (X4 - (X1 + X3) + X2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// Task 8

var day = "   friday  ";
day = day.trim()
day = day.charAt(0).toUpperCase

let dayB = "Friday";
let dayC = "Saturday";
let dayD = "Sunday";
let dayE = "Monday";
let dayF = "Thursday";
let dayG = "Tuesday";
let dayH = "Wednesday";
let dayI = "World"

switch (day) {
  default:
  console.log("No Appointments Available");
  break;
  case (day == dayE || day == dayF):
  console.log("From 10:00 AM To 5:00 PM");
  break;
  case (day == dayG):
  console.log("From 10:00 AM To 6:00 PM");
  break;
  case (day == dayH):
  console.log("From 10:00 AM To 7:00 PM");
  break;
  case (day == dayI):
  console.log("Its Not A Valid Day");
  break;
}

// Task 9

let start = 10;
let end = 100;
let exclude = 40;

for (start = 10; start <= end; start += 10) {
  if (start == exclude) {
    continue;
  }
  console.log(start);
}

// Task 10

let starto = 10;
let endo = 0;
let stopo = 3;
for (starto = 10; starto >= stopo; starto -= 1) {
  if (starto == 10) {
    console.log(starto);
  } else console.log("0" + starto);
}

// Task 11

let startoon = 1;
let endoon = 6;
let breaker = 2;

for (startoon = 1; startoon <= endoon; startoon += 1) {
  console.log(startoon);
  console.log("--2");
  console.log("--4");
}

// Task 12

let index = 10;
let jump = 2;

for (;;) {
  if (index % jump == 0 && index <=10) {
    console.log(index)
  }
  index -= jump 
  if (index <= 0) {
    break
  }}

// Task 13

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)){
   continue
  } else console.log(`"${i} => ${friends[i]}"`)
}

// Task 14

let startXX = 0;
let mixXX = [1, 2, 3, "A", "B", "C", 4];
for (let i = startXX; i < mixXX.length; i++) {
  if (typeof mixXX[i] != 'string' && i > 0){
    console.log(mixXX[i])
  }
}
