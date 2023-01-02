/**
=============================
Object
=============================
 */
/**
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};

console.log(atom.addValue(10));
 */

/**
=============================
Object
=============================
 */

/**
const cars = [];
cars.push("BMW");

console.log(cars);
 */

/**
const car = ["BMW", "Toyta", "Audi"];
const carCopy = [...car];

console.log(carCopy);
 */
/**
const foo = { name: "shuvo", surname: "Mallick" };
// const foo = document.querySelectorAll(".foo");
// document.querySelectorAll(".foo");
// const nodes = Array.from(foo);
// const fooCopy = [...foo];
// const fooConvert = Array.from(foo);
// console.log(fooConvert);

const convertArray = Object.entries(foo);
console.log(convertArray);
 */

/**
const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };
const arr = Array.from(arrLike);
console.log(arr);
*/

/**
let txt = "Please locate where locate occurs!";

let result = txt.startsWith("locate");
console.log(result);
*/
/**
let firstName = "John";
let lastName = "Doe";

let txt = `Welcome ${firstName}, ${lastName}!`;

console.log(txt);
 */

/**
const arr = ["Tyota", "BMW", "Audi", "Marchadiz"];
const arrcopy = [...arr];
console.log(arrcopy);
 */

/**
const arr1 = ["shuva", "mallick"];
const arr2 = [];
const baz = Array.from(arr1);
console.log(baz);
 */

/**
const a = NaN;
console.log(typeof a);
*/

/**
let a = 2;

while (a != Infinity) {
  a = a + a;
  console.log(a);
}
 */

/**
const arr = [1, 2, 3, 4];

const [first, second] = arr;
console.log(first, second);
 */

/**
function processInput(input) {
  return { left, right, top, bottom };
}

const { left = 52, top = "Top Side" } = processInput(input);
console.log(processInput);
 */

/**
let price = 10;
let vat = 5;
console.log(`the Total Price ${price * vat}`);
 */

/**
let x = Number.MIN_SAFE_INTEGER;
console.log(x);
 */

/**
let a = Number.isInteger(20.522);
let b = BigInt(12345678901234567890);
console.log(a);
console.log(typeof b);
console.log(Number.isSafeInteger(b));
 */

/**
let test = 2;
if (test == 2) {
  test = () => {
    console.log("Yup");
  };
}
 */

// let x = 123.5552;
// x.toString();

// console.log(x.toExponential(2));
// console.log(x.toFixed(2));
// console.log(x.toPrecision(4));
// console.log(x.valueOf(2));

// let date = parseInt("years 10");
// let flt = "10 Years";
// console.log(Number.isSafeInteger(flt));
// console.log(Number.parseFloat("shuva"));

// ---------------
// Number Property
// ---------------

// let x = Number.EPSILON;
// let x = Number.NaN;
// console.log(x);

// ---------------
// Arrow Functions
// ---------------

// const maped = [1, 2, 3].map((x) => {
//   const y = x + 1;
//   return x * y;
// });

// const maped = [1, 2, 3].map((number) => `A String Containing the ${number}`);

// const maped = [1, 2, 3].map((number) => {
//   const nextNumber = number + 1;
//   return `A string containing the ${nextNumber}.`;
// });

// const maped = ["get", "post", "put"].map((httpMethod) =>
//   Object.prototype.hasOwnProperty.call(
//     httpMagicObjectWithAVeryLongName,
//     httpMethod
//   )
// );

// const maped = [1, 2, 3].map((value) => {
//   const result = value + 5;
//   return result * value;
// });

// const maped = (item) => item.height;

// console.log(maped);

// ================= ARRAY =================
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
// const fvtFood = ["Chocolate", "Egg"];
// const fvtFood = fruits.slice(1, 4);

// function myFunction(value) {
//   console.log(value);
// }
// fruits.forEach();
// const points = [40];

// console.log(points instanceof Array);
// console.log(fruits.push("Audi"), fruits);
// console.log(fruits.shift(), fruits);
// console.log(fruits.unshift("BMW"), fruits);
// console.log((fruits[fruits.length + 1] = "BMW"), fruits);
// console.log((fruits[fruits.length + 1] = "BMW"), fruits);
// console.log(delete fruits[0], fruits);
// console.log(fruits.concat(fvtFood));
// console.log(fruits.splice(2, 3, "Lemon", "Kiwi"), fruits);
// console.log(fruits.slice(1));
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const points = [40, 100, 1, 5, 25, 10];

// let result = points.sort(function (a, b) {
//   console.log(a - b);
// });

// console.log(result);

/**
const points = [40, 100, 1, 5, 25, 10];

let result = points.sort(function () {
  return 0.5 - Math.random(points);
});

console.log(result);
 */

/**
const point = [40, 100, 1, 5, 25, 10];

function fisherYates(points) {
  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[i];
    points[j] = k;
  }
  console.log(points);
}

fisherYates(point);
 */

/**
const point = [40, 100, 1, 5, 25, 10];

function fisherYates(points) {
  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[i];
    points[j] = k;
  }
  console.log(points);
}

fisherYates(point);
 */

/**
const point = [40, 100, 100, 5, 25, 10];

function myArr(arr) {
  // return Math.max.apply(null, arr);
  return Math.min.apply(null, arr);
}

console.log(myArr(point));
 */

/**
const point = [40, 100, 100, 5, 25, 10];

function myArrayMax(arr) {
  let max = Infinity;
  let len = arr.length;

  while (len--) {
    if (arr[len] < max) {
      max = arr[len];
    }
  }
  return max;
}

console.log(myArrayMax(point));
 */

/**
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(cars);
 */

/**
const numbers = [45, 4, 9, 16, 25];

numbers.forEach((item) => {
  console.log(item);
});
*/

/** 
const numbers = [45, 4, 9, 16, 25];

let result = numbers.every((value) => {
  return value > 2;
}, 0);

console.log(result);
*/

/**
const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.indexOf("Mango");

console.log(position);
console.log(fruits);
 */

/**
const numbers = [4, 9, 16, 25, 29];

let result = numbers.findIndex((value, index, array) => value > 17);

console.log(result);
*/

/**
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));
 */
// for (let x of myArr.includes("D")) {
//   console.log(x);
// }
// console.log(myArr.keys());

const d = new Date("2022-03-25");

console.log(d);
