// console.log("Hello world!");

// var a = "Shuvo";
// const b = "Mallick";
// let c = "B.Sc";

// console.log(b);

// c = "Mallick rewrite";
// console.log(c);

// ===== data type =====
// 1. Premitive
// String
// Number
// Boolean
// null
// undefined
// Symbol

// 2. Non-Primitive/Reference Typeর্
// Array
// Object

// ===== Array/Object =====
// const names = ["shuvo", "mallick", "undefied", null];
// const object = {
//   name: "Name",
//   age: 26,
//   education: "B.Sc",
// };

// console.log(object);

// === function ===
// function sum() {
//   console.log("sum result");
// }

// call
// sum();

// ===== object =====
// const object = {
//   name: "shuvo",
//   age: 26,
//   valid: true,
//   address: {
//     city: "chittagong",
//     country: "Bangladesh",
//   },
//   getname: function () {},
// };

// === Array ===
// const names = ["shuvo", "mallick", "undefied", null];

// // === condition ===
// if (true) {
//   console.log("console from if");
// } else {
//   console.log("console from else");
// }

// // === Var Problem/Issue One Scope don't maintain Var ===
// if (true) {
//   var age = 26;
//   //   let age = 30;
// }

// // console.log(age);

// // === Var Problem/Issue Two Before After Variable Declartion ===
// console.log(nameTwo);
// let nameTwo = "Var Prb";

// ===== Arithmetic Operator =====
/**
let plus = 1 + 3;

console.log(plus++);
console.log(++plus); 
 */

/**
const pesonName = "Shuvo";
let age = 26;

if (pesonName && age) {
  console.log(pesonName, age);
} else {
  console.log("Invalid");
}

if (age) {
  age += 2;
  console.log(age);
}
 */

/**
 * --------------------
 * 3rd class
 * --------------------
 */

/**
let word = "three";

if (word === "one") {
  console.log(1);
} else if (word === "two") {
  console.log(2);
} else {
  console.log("number is out of range 1-3");
}
 */

/**
let word = "three";

switch (word) {
  case word === "one":
    console.log(1);
    break;

  case word === "two":
    console.log(2);
    break;

  default:
    console.log("nameber is out of range 1-2");
    break;
}
 */

// =======================================
// Loop
/** 
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
 */

/**
const person = "shuvo Mallick";

// console.log(person.length);

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
 */

/**
for (let i = 1; i <= 5; i++) {
  if (i == 4) {
    break;
    // continue;
  }
  console.log(i);
}
 */

/**
let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}
 */

// -------------------------------
// Assignment Operator
// -------------------------------
/**
let x, y, result;
x = 5;
y = 2;
x **= y;

console.log(x);
 */

/**
=============================
4th Class: function 
=============================
 */

/**
Task: 
1. Create a function it's take two number parameter and return reminder value
2. FizzBuzz Problem | Number nibo  
3. Largest Swap 48 - 84
 */

/**
// Pure Function
function sum(number1 = 1, number2 = 2) {
  return number1 + number2;
}

console.log(sum(4, 5));
 */

// === Higher Order Function ===
/**
function highOrder() {
  return function () {
    console.log("Inner Function");
  };
}

const another = highOrder();
another();
// console.log(another());
 */

// === Call Back Function ===
/**
function first(name) {
  name();
}

first(function () {
  console.log("Hello world");
});
 */
/**
function calculate(inputVal) {
  inputVal(5, 6);
}

calculate(function (num1, num2) {
  console.log(10 + 5);
});
 */

/**
function calculate(inputVal) {
  const result = inputVal(5, 6);
  return result;
}

let addition = calculate(function (num1, num2) {
  return num1 + num2;
});

console.log(addition);
 */

/**
=============================
5th Class: String 
=============================
 */

// Set time Out
/**
function renderHtml() {
  console.log("HTML render successfully");
}

setTimeout(renderHtml, 300);
 */

/**
setTimeout(function () {
  console.log("HTMl Render successfully");
}, 3000);

console.log("After setTimeout");
 */

// Declaration
/**
console.log(sum(5, 5));
function sum(num1, num2) {
  return num1, num2;
}
 */

// Expression
/**
const sum2 = function (num1, num2) {
  return num1 + num2;
};
 */

// Arrow Function
/**
const sum3 = (num1, num2) => {
  return num1 + num2;
};

console.log(sum3(5, 5));
 */

// Object + Method
// const person = "Shuvo Mallick";
// const age = 26;

// console.log(person.toLowerCase());
// console.log(person.split(" "));
// console.log(person.replace("Mallick", "Banarjee"));
// console.log(person.charAt(2));
// console.log(person.concat(", B.Sc engg", " in CSE"));
// console.log(person);
// console.log(typeof age.toString());
// console.log(person.trim());
// console.log(person.substring(6, 13));
// console.log(person.substring(6, 13));
// console.log(person.startsWith("Shuvo"));
// console.log(person.endsWith("c"));
// console.log(person.indexOf("S"));

/**
=============================
6th Class: String 
=============================
 */

/**
const age = 26.0122;
console.log(age.toFixed(2));
console.log(age.toPrecision(3));
 */

// console.log(Math.PI);

// const number = 3.58960025;
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));
// console.log(Math.random() * 100);
// console.log(Math.round(Math.random() * 100));
// console.log(Math.abs(number - 5662.22));
// console.log(Math.abs(-555.222));
// console.log(Math.pow(number, 5));
// console.log(Math.max(2, 3, 85, 5855));

/**
Array
-----
 */

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr[3]);

// arr[arr.length] = 10;
// console.log(arr.length);
/**
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + "index" + i);
}
*/

// arr[3] = 9;
// console.log(arr[3]);
// console.log(arr);

// console.log(arr);
/**
arr[10] = 10;
arr.push(11);
arr.pop();
arr.unshift(19);
arr.shift();
console.log(arr);
 */

// arr[arr.length] = 10;
// console.log(arr.length);

/**
for (let i = 0; i < arr.length; i++) {
  let max = arr[0];

  if (arr[i] > max) {
    max = arr[i];
  }
}
 */

/**
=============================
7th Class: Array 
=============================
 */

// const numbers = [1, 2, 3, 4, 5, 52, 66, 9, 8];

/**
numbers.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
*/

/**
const numbers2 = [8, 9, 10];
const newArr = numbers.concat(numbers2);
console.log(newArr);
 */

// const sliced = numbers.slice(1, 5);
// const sliced = numbers.slice(3);
// console.log(sliced);

// const spliced = numbers.splice(2);
// console.log(spliced);
// console.log(numbers);

// const country = "Bangladesh";
// const splited = country.split("");
// console.log(splited);
// console.log(splited.join(","));

// const reversed = numbers.reverse();
// console.log(reversed);

// const char = ["a", "b", "bb", "e", "f", "d"];

// const sorted = numbers.sort();
// const sortedChar = char.sort();

// const sortedArr= numbers.sort((a,b)= a-b);
// console.log(sortedChar);
// console.log(sortedArr);

/**
Object
 */

/**
const numbers = [1, 2, 3, 4, 5, 52, 66, 9, 8, 85];
const str = ["a", "e", "aa", "c", "bb"];

let sorted = str.sort();
console.log(sorted);
 */

/**
numbers.forEach((a, b, c) => {
  console.log(a, b, c);
});
 */

/**
function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

forEach(numbers, (value, index, arr) => {
  console.log(value, index, arr);
});
 */

// let result = numbers.slice(1, 2);

// let result = numbers.splice(1, 3);
// console.log(result);
// console.log(numbers);

/**
const country = "Bangladesh";
const splited = country.split("");
console.log(splited);
console.log(splited.join(","));
 */

/**
const person = {
  name: "Shuvo",
  age: 34,
  play() {
    return "CSE Engg" + this.name;
  },
};

// const value = "age";
console.log(person.play());
*/

/**
=============================
8th Class: Objects
=============================
 */

// Equal Value or Number Type
/**
let age = 26;
let age2 = age;

console.log(age == age2);
 */

// Reference Type
/**

let arr2 = arr;
arr2.push(6);
console.log(arr, arr2);
 */

/**
const name = "name";
const name2 = String("name");
*/

/**
let arr = [1, 2, 3, 4];
let arr2 = Array.from(arr);
console.log(arr2);
 */

/**
const arr = [1, 2, 3, 4];
const arr2 = Array.from(arr);

console.log(arr2);
 */

/**
const a = "12";
const b = Number(14);
console.log(typeof a);
 */

/**
// Object Call without duplication
const person = {
  name: "John Doe",
  age: 26,
  funName() {
    return "This is function in Object";
  },
};

const property = "age";

if (property in person) {
  console.log(person[property]);
} else {
  console.log("Not Available");
}
 */

// const numbers = [1, 2, 3, 4, 8, 9];

// const newArr = numbers.map((value, index, array) => value * 1);
// const findArr = numbers.find((item) => item == 2);
// const filterArr = numbers.filter((item) => item % 2 == 0);

// console.log(newArr);
// console.log(findArr);
// console.log(filterArr);

/**
=============================
9th Class: Buildin Function Behind the sence 
=============================
 */

// ---------------
// Map Function How to work Behind the Sence
// ---------------

// const numbers = [1, 2, 3, 4, 5, 6];
/**
//1st Way
const newArr = numbers.map((value, index, array) => value * 5);
 */

/**
//2nd Way 
const mappedArr = numbers.map((element) => {
  if (element % 2 == 0) return element * 2;
  return element;
});

console.log(mappedArr);
 */

/**
//3rd Way
function map(arr, cb) {
  if (!Array.isArray(arr)) return false;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = cb(arr[i], i, arr);
    result.push(element);
  }

  return result;
}

const mappedArr = map(numbers, (element, index, arr) => {
  if (element % 2 == 0) return element * 2;
  return element;
});

console.log(mappedArr);
 */

// -----------
// isNaN
// -----------------
/**
const eight = parseFloat("83djjj");
const 
 */

// ----------------
// Constructor Function
// ----------------

// const eight = parseFloat("5sfdsafsa$$$5s5");
// const binary = parseInt("10101000", 2);
// console.log(eight);
// console.log(binary);

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.constructor);

// console.log(Date.now());

// Date
// --------------
/**
const today = new Date();
today.setDate(13);

console.log(today.toDateString());
 */

/**
function copyright(staringYear) {
  const date = new Date();
  const currentYear = date.getFullYear();
  let result;
  if (staringYear > currentYear) {
    result = `${currentYear} | Copyright`;
  } else {
    result = `${staringYear} - ${currentYear} | copyright`;
  }

  console.log(result);
}

copyright(2021);
 */

/**
function voter(age) {
  const result = age === 18 ? "Voter" : "Not a Voter";
  console.log(result);
}

voter(15);
 */

/**
===================================================
10th Class: Custom find, filter method and factorial function
===================================================
 */

/**
const numbers = [1, 2, 3, 5, 8, 12, 15];

function find(arr, cb) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    const result = cb(arr[i], i, arr);
    if (result) return arr[i];
  }

  return undefined;
}

const findElement = find(numbers, (item) => item === 12);

console.log(findElement);
 */

/**
function factorial(num) {

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

const result = factorial(5);
console.log(result);
 */

/**
function factorial(num) {
  let result = 1;
  let i = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}

const result = factorial(3);
console.log(result);
 */

/**
===========================================================
11th Class: 
===========================================================
 */
// Word Count
// --------------------
/**
let sentence = "Hello I     am Shuvo     Mallick";

function wordCount(sentence) {
  if (typeof sentence !== "string") return false;
  // return sentence.split("").length;

  const splitedStr = sentence.split(" ");
  // console.log(splitedStr);
  let totalWord = 0;

  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i]) {
      totalWord++;
    }
  }

  return totalWord;
}

// wordCount(sentence);
console.log(wordCount(sentence));
 */

// Vowel Count
// -----------------------------

// Using Character
/**
let sentence = "Hello I am Shuvo Mallick";

function vowelCount(str) {
  // if (typeof str !== "string") return false;
  // let vowel = "aeiou";
  // let strLength = str.toLowerCase().length;
  // let total = 0;
  // for (let i = 0; i < strLength; i++) {
  //   if (vowel.search(str[i]) !== -1) {
  //     total++;
  //   }
  // }
  // console.log(total);
}

// vowelCount(sentence);

let str = "shuvo";
console.log(typeof str);
 */

/**
===========================================================
12th Class: Rest Operator, Spread Operator
===========================================================
 */
// Array Total Sum Using Rest Operator
// ------------------
/**
function sum(...numbers) {
  return numbers.reduce((pre, curr) => pre + curr, 50);
}

console.log(sum(1, 2, 3, 4));
*/

// Spread Operator Use
// --------------------
/**
const country = "Bangladesh";

const characters = [...country];
const arr2 = [...characters];
console.log(characters, arr2);
 */

/**
===========================================================
13th Class: Problem Solving + Reduce Function 
===========================================================
 */

// Case Swapping
// --------------------
// Best Way 01
// ------------
/**
function caseSwap(str) {
  if (typeof str !== "string") return false;

  let changeCase = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      changeCase += str[i].toUpperCase();
    } else {
      changeCase += str[i].toLowerCase();
    }
  }
  console.log(changeCase);
}

caseSwap("banGlaDesh");
 */

// Best Way 02 (Not Solve)
// ------------
/**
function caseSwap(str) {
  if (typeof str !== "string") return false;

  let changeCase = "";

  str.forEach((item) => {
    if (item == item.toLowerCase()) {
      changeCase += item.toUpperCase();
    } else {
      changeCase += item.toLowerCase();
    }
  });
  console.log(changeCase);
}

caseSwap("banGlaDesh");
 */

// reduce Function
// ----------------
/**
const numbers = [1, 25, 50, 67, 55, 87];

numbers.reduce((prev, curr, index, arr) => {
  console.log(prev);
  // return [...prev, curr * 2];
  // return { ...prev, [index]: curr };
  return [...prev, curr * 2];
  return prev + curr;
}, []);
 */

/**
const numbers = [1, 25, 50, 67, 55, 87];

const result = numbers.reduce((pre, curr) => {
  console.log(pre + "+");
  return pre * curr;
});
 */

/**
===========================================================
14th Class: Reduce Details Discuss and Problem Solving
===========================================================
 */

// Conver Object Into Object
// ----------------
/**
const products = [
  { id: 1, name: "iPhone 13 Pro", price: 999, qty: 4 },
  { id: 2, name: "iPhone 12 Pro", price: 500, qty: 3 },
  { id: 3, name: "iPhone 11 Pro", price: 600, qty: 2 },
  { id: 4, name: "iPhone 12 Pro", price: 750, qty: 5 },
  { id: 5, name: "iPhone 14 Pro", price: 850, qty: 3 },
];

const productsObj = products.reduce((prev, curr) => {
  prev[curr.id] = curr;
  return prev;
}, {});

console.log(productsObj);
 */

/**
const products = [
  { id: 1, name: "iPhone 13 Pro", price: 999, qty: 4 },
  { id: 2, name: "iPhone 12 Pro", price: 500, qty: 3 },
  { id: 3, name: "iPhone 11 Pro", price: 600, qty: 2 },
  { id: 4, name: "iPhone 12 Pro", price: 750, qty: 5 },
  { id: 5, name: "iPhone 14 Pro", price: 850, qty: 3 },
];

const cartTotal = products.reduce((prev, curr) => {
  prev = curr.price * curr.qty;
  return prev;
});

console.log(cartTotal);
 */

/**
Object.values("");

const obj = { name: "Bangladesh" };

console.log(Object.values(obj));
console.log(Object.keys(obj));
 */

const products = [
  { id: 1, name: "iPhone 13 Pro", price: 999, qty: 4 },
  { id: 2, name: "iPhone 12 Pro", price: 500, qty: 3 },
  { id: 3, name: "iPhone 11 Pro", price: 600, qty: 2 },
  { id: 4, name: "iPhone 12 Pro", price: 750, qty: 5 },
  { id: 5, name: "iPhone 14 Pro", price: 850, qty: 3 },
];

function cartTotal(arr) {
  if (!Array.isArray(arr)) return false;

  let totalAmount = arr.reduce((prev, curr) => prev + curr.price * curr.qty, 0);
  let totalQuantity = arr.reduce((prev, curr) => prev + curr.qty, 0);
  console.log(`${totalAmount} ${totalQuantity}`);
}

cartTotal(products);
