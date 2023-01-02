// ===== Function Task =====
/**
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);
 */

// ===== 2nd Function Task =====
/**
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Toyota",
  model: "Accord",
  year: 1998,
};

const x = myCar.make;
myFunc(myCar);
const y = myCar.make;
 */

// ===== 3rd Function Task =====
/**
function add(a, b) {
  const result = a + b;
  return result;
}

console.log(add(1, 2));
 */

// ===== Array Task =====
/**
const fruits = [];
fruits.push("apple", "mango", "banana", "peach");
console.log(fruits.length);

fruits[4] = "coconut";
console.log(fruits.length);
console.log(Object.keys(fruits));

for (i = 0; i < fruits.length; i++) {
  const result = fruits[i];
  console.log(result);
}
 */

// ===== Object Task =====
/**
const myBike = {
  model: 2022,
  color: "red",
  cc: 150,
  engine: { cylinders: 4, size: 2.2 },
};

console.log(myBike);
console.log(myBike.length);
 */

/**
const firstNum = 19;

if (firstNum % 2 == 0) {
  console.log("Number is Event");
} else {
  console.log("Number is Odd");
}
 */

/**
 * ---------------------------
 * Find The area of a triangle
 *
 * create 2 variable for base and height
 * then calculate for find area of a triangle
 * ---------------------------
 */

/**
let base = 20;
let height = 10;

function areaTriangle() {
  let area = (base * height) / 2;
  return area;
}

let result = areaTriangle();

console.log("The Triangle Area:" + result);
 */

// 2nd Way using Argument
/**
function areaTriangle(base, height) {
  let area = (1 / 2) * base * height;
  console.log("The Triangle Area is:" + area);
}

areaTriangle(20, 10);
 */

/**
 * ---------------------------
 * Convert Age to Day
 *
 * Create 2 Variable for age like - let age= 26
 * Then Convert it 26 years to days
 * ---------------------------
 */

/**
let age = 26;

function calculateDay() {
  let days = age * 365.24;
  console.log(age + " Age to Years Conversion:" + days + " Days");
}

calculateDay();
 */

/**
 * --------------------
 * Grading System
 * --------------------
 */

/**
let subNumber = 50;

if (subNumber >= 80 && subNumber <= 100) {
  console.log("Your Subject Number is: " + subNumber + " & Grade is: A+");
} else if (subNumber >= 70 && subNumber <= 79) {
  console.log("Your Subject Number is: " + subNumber + " & Grade is: A");
} else if (subNumber >= 60 && subNumber <= 69) {
  console.log("Your Subject Number is: " + subNumber + " & Grade is: A-");
} else if (subNumber >= 50 && subNumber <= 59) {
  console.log("Your Subject Number is: " + subNumber + " & Grade is: B");
} else if (subNumber >= 40 && subNumber <= 49) {
  console.log("Your Subject Number is: " + subNumber + " & Grade is: C");
} else if (subNumber >= 33 && subNumber <= 39) {
  console.log("Your Subject Number is: " + subNumber + " & Grade is: D");
} else {
  console.log("Your Subject Number is: " + subNumber + " & You are Not Passed");
}
 */

/**
 * ----------------------------
 * Grading System using Switch
 * ----------------------------
 */

/**
let subNumber = 50;

switch (subNumber) {
  case subNumber >= 80 && subNumber <= 100:
    console.log("Your Subject Number is: " + subNumber + " & Grade is: A+");
    break;

  case subNumber >= 70 && subNumber <= 79:
    console.log("Your Subject Number is: " + subNumber + " & Grade is: A");
    break;

  case subNumber >= 60 && subNumber <= 69:
    console.log("Your Subject Number is: " + subNumber + " & Grade is: A-");
    break;

  case subNumber >= 50 && subNumber <= 59:
    console.log("Your Subject Number is: " + subNumber + " & Grade is: B");
    break;

  case subNumber >= 40 && subNumber <= 49:
    console.log("Your Subject Number is: " + subNumber + " & Grade is: C");
    break;

  case subNumber >= 33 && subNumber <= 39:
    console.log("Your Subject Number is: " + subNumber + " & Grade is: D");
    break;

  default:
    console.log(
      "Your Subject Number is: " + subNumber + " & You are Not Passed"
    );
    break;
}
 */

/**
 * =================================
Task: 
1. Create a function it's take two number parameter and return reminder value
2. FizzBuzz Problem | Number nibo  
3. Largest Swap 48 - 84
=================================
 */

// ----------------
// Task 01: Create a function it's take two number parameter and return reminder value
// ----------------
/**
function reminder(num1, num2) {
  return num1 % num2;
}

console.log(reminder(5, 2));
 */

// ----------------
// Task 02: FizzBuzz Problem
// ----------------
/**
function fizzBuzzFun(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Not Match");
  }
}

fizzBuzzFun(15);
 */

// ----------------
// Task 03: Largest Swap 48 - 84. If Input number larger then the swap number its return True otherwise False.
// ----------------
// 1st Version
/**
function finalResult(inputNum, rNum) {
  if (inputNum > rNum) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function reverseFun(getNum) {
  let a = getNum;
  let r = 0,
    rNum = 0;

  while (a > 0) {
    r = a % 10;
    rNum = rNum * 10 + r;
    a = parseInt(a / 10);
  }

  return rNum;
}

let inputNum = 48;
let rNum = reverseFun(inputNum);

finalResult(inputNum, rNum);
 */

// 2nd Version
/**
function finalResult(inputNum, rNum) {
  if (inputNum > rNum) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function reverseFun(getNum) {
  let original = getNum + "";

  let result = "";
  for (let i = 0; i < original.length; i++) {
    result = original[i] + result;
  }
  return result;
}

let inputNum = 48;
let rNum = reverseFun(inputNum);

finalResult(inputNum, rNum);
 */

// ----------------
// Task 01: Find Out Max Number from Array
// ----------------
/**
const arr = [1, 2, 3, 4, 5, 6, 15, 25];

let max = arr[0];
for (i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);
 */

// ----------------
// Task 02: Find Out the MIN Number from Array
// ----------------
/**
const arr = [1, 2, 3, 4, 5, 6, 15, 25];

let min = arr[0];
for (i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log("The Mininum Number is: " + min);
 */

/**
 * ---------------------------
 * আপনারা sumOfArray নামের একটা বানাবেন। এ ফাংশনটা একটা
 * Numbers of Array Parameter নিবে তারপর ফাংশনটা ঐ array
 * এর সব ইলিমেট যোগ করে রেজাল্ট রিটার্ন করবে।।।।।
 * ---------------------------
 */

// 1st Way to Solve:
/**
const sumOfArray = [1, 5, 20, 8, 9, 10, 9, 15];

function addArrNum(num) {
  let arr = num;
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr += num[i];
  }
  return sumArr;
}

let result = addArrNum(sumOfArray);

console.log(result);
 */

/**
// 2nd Way:
const numbers = [1, 5, 20, 8, 9, 10, 9, 15];

function sumOfArray(arr) {
  if (!Array.isArray(arr)) return false;
  let total = 0;
  arr.forEach((item) => (total += item));
  return total;
}

// const sum = sumOfArray(numbers);
console.log(sumOfArray(numbers));
 */

/**
 *
 * =========== Task: ForEach ===========
 * How to work forEach in the Behind the Scene
 * ====================================
 *
 */

/**
const numbers = [1, 2, 3, 4, 8, 9];
numbers.forEach((a, b, c) => {
  console.log(a, b, c);
});
 */

/**
const numbers = [1, 2, 3, 4, 8, 9];

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

forEach(numbers, (value, index, arr) => {
  console.log(value, index, arr);
});
 */

/**
 * =========== Task: Filter() =============
 * How to work Filter in the Behind the Scene
 * const numbers = [1, 2, 3, 4, 8, 9];
 * const filterArr = numbers.filter((item) => item % 2 == 0);
 * ========================================
 */

/**
const numbers = [1, 2, 3, 4, 8, 9];
const filterArr = numbers.filter((item) => item % 2 == 0);
console.log(filterArr);
 */

/**
const numbers = [1, 2, 3, 4, 8, 9, 12];

function filter(arr, cb) {
  if (!Array.isArray(arr)) return false;

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = cb(arr[i], i, arr);
    // console.log(value);
    if (value) {
      result.push(value);
    }
  }

  return result;
}

const filterArr = filter(numbers, (value, index, arr) => {
  if (value % 2 == 0) return value;
});

console.log(filterArr);
 */

/**
 * =========== Task: Find ===========
 * How to work Find in the Behind the Scene
 * const numbers = [1, 2, 3, 4, 8, 9];
 * const findArr = numbers.find((item) => item == 2);
 * ==================================
 */

/**
const numbers = [1, 2, 3, 4, 8, 9, 12];

function find(arr, cb) {
  if (!Array.isArray(arr)) return false;

  let result;
  for (let i = 0; i < arr.length; i++) {
    const element = cb(arr[i], i, arr);
    if (element) {
      result = element;
      break;
    } else if (element == undefined) {
      result = element;
    }
  }

  return result;
}

const findNumber = find(numbers, (element, index, arr) => {
  if (element == 5) return element;
});

console.log(findNumber);
 */

/**
 * =============== Task 03: Map ================================
 * How to work Map in the Behind the Scene
 * const numbers = [1, 2, 3, 4, 8, 9];
 * const newArr = numbers.map((value, index, array) => value * 1);
 * =============== Task ==========================================
 */

/**
const numbers = [1, 2, 3, 4, 8, 9];

const mappedArr = numbers.map((element) => {
  if (element % 2 == 0) return element * 2;
  return element;
});

console.log(mappedArr);
 */

/**
const numbers = [1, 2, 3, 4, 8, 9];

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
  if (!element % 2 == 0) return element * 2;
  return element;
});

console.log(mappedArr);
 */

/**
 * =========== Task: Find() Input Value Pass Outside of Function ===========
 * How to work Find in the Behind the Scene
 * const numbers = [1, 2, 3, 4, 8, 9];
 * const findArr = numbers.find((item) => item == 2);
 * ====================================================================
 */

/**
// 1st Way
// ----------
const numbers = [1, 2, 3, 4, 8, 9, 12];

function find(arr, cb) {
  if (!Array.isArray(arr)) return false;

  let result;
  for (let i = 0; i < arr.length; i++) {
    const element = cb(arr[i], i, arr);
    if (element) {
      result = element;
      break;
    } else if (element == undefined) {
      result = element;
    }
  }

  return result;
}

function findElement(searchValue) {
  const findNumber = find(numbers, (element) => {
    if (element == 23) return element;
  });

  console.log(findNumber);
}

const result = findElement(88);
 */

/**
// 2nd Way
// ----------
const numbers = [1, 2, 3, 4, 8, 9, 12];

function find(arr, cb) {
  if (!Array.isArray(arr)) return false;

  let result;
  for (let i = 0; i < arr.length; i++) {
    const element = cb(arr[i], i, arr);
    if (element) {
      result = arr[i];
      break;
    } else if (element == undefined) {
      result = element;
    }
  }

  return result;
}

function findElement(value) {
  const result = find(numbers, (element) => element === value);
  return result;
}

console.log(findElement(2));
 */

/**
 * ================ Task: Number System Function  ==========
 * Number to Binary || Binary to Hexademical
 * =========================================================
 */

/**
// 1st Way

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(dec2bin(25));
*/

/**
//2nd Way
function dec2bin(dec) {
  let binary = "";
  while (dec > 0) {
    binary = (dec % 2) + binary;
    dec = Math.floor(dec / 2);
  }
  return binary;
}

console.log(dec2bin(50));
 */

/**
 * ================ Task 01: Word Count  ==========
 * Word Count
 * =========================================================
 */

/**
let sentence = "Hello there, My Name is Shuvo Mallick";

function wordCount(str) {
  return str.split(" ").length;
}

console.log(wordCount(sentence));
 */

// Best Way
// --------
/**
let sentence = "My name is Shuvo mallick.    Working as    a Web Developer";

function wordCount(str) {
  if (typeof str !== "string") return false;
  let splitedStr = str.split(" ");

  let count = 0;
  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i]) {
      let newArr = splitedStr[i];
      count++;
    }
  }
  console.log(count);
}

wordCount(sentence);
 */

/**
 * ================ Task 01: Vowel Count  ==================
 * Vowel Count using JS
 * =========================================================
 */

// Using Regular Expression
// ----------------------------
/**
let sentence = "Hello there, My Name is Shuvo Mallick";

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}

const result = countVowel(sentence);

console.log(result);
 */

// Using Loop
// ----------
/**
let sentence = "Hello there, My Name is Shuvo Mallick";

function countVowel(str) {
  let string = str.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];

  let result = 0;
  for (let i of string) {
    // console.log(letter);
    if (vowel.includes(i)) {
      result++;
    }
  }

  return result;
}

console.log(countVowel(sentence));
 */

// Best Way (Vowel Using String)
// ----------------------------
/**
let sentence = "My name is Shuvo Mallick";

function countVowel(str) {
  if (typeof str !== "string") return false;
  let vowel = "aeiou";
  let strLowerCase = str.toLowerCase();

  let countVowel = 0;
  for (let i = 0; i < strLowerCase.length; i++) {
    if (vowel.search(strLowerCase[i]) !== -1) {
      countVowel++;
    }
  }
  console.log(countVowel);
}

countVowel(sentence);
 */

// Best Way (Using Array Vowel)
// ----------------------------
/**
let sentence = "My name is Shuvo Mallick";

function countVowel(str) {
  if (typeof str !== "string") return false;
  let vowel = ["a", "e", "i", "o", "u"];
  let strLowerCase = str.toLowerCase();

  let countVowel = 0;
  for (let i = 0; i < strLowerCase.length; i++) {
    if (vowel.indexOf(strLowerCase[i]) !== -1) {
      countVowel++;
    }
  }
  console.log(countVowel);
}

countVowel(sentence);
 */

/**
 * ================ Task 01: Highest digit  ==================
 * Highest digit
 * ===========================================================
 */

/**
function findHighestDigit(num) {
  // console.log(num);
  let sNum = num.toString();
  let result = 0;
  for (let i = 0; i < sNum.length; i++) {
    if (result < sNum[i]) {
      result = sNum[i];
    }
    // console.log(result);
  }
  return result;
}

// findHighestDigit(45568);
console.log(findHighestDigit(45568));
 */

// best Way
// -------------
/**
function heighestDigit(num) {
  if (typeof num !== "number") return false;
  let numToArr = num.toString().split("");

  let largeDigit = 0;
  numToArr.forEach((item) => {
    // const number = Number(item);
    if (item > largeDigit) {
      largeDigit = item;
    }
  });

  console.log(largeDigit);
}

heighestDigit(236981);
 */

/**
 * ================ Task 01: Lowest digit  ==========
 * =========================================================
 */
/**
function findLowestDigit(num) {
  let arr = num.toString().split("");
  let result = Math.min(...arr);
  return result;
}

// findLowestDigit(455968);
console.log(findLowestDigit(459568));
 */

/**
 * ================ Task: Nabed Task Letter Swapping  ================
 * NabED
 * akta String pass krvo capital and small letter combined kore
 * return krbe capital gulo small letter e and small gulo capital letter a
 * =========================================================
 */

/**
function strFunction(str) {
  // let lowerCase = str.match(/[a-z]/);
  // console.log(lowerCase);
  let arrayStr = str.split("");
  // return arrayStr.match(/[a-z]/);
  let result = [];
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i].match(/[a-z]/)) {
      let singleStr = arrayStr[i].toUpperCase();
      // singleStr.toUpperCase();
      result.push(singleStr);
    } else if (arrayStr[i].match(/[A-Z]/)) {
      let singleStr = arrayStr[i].toLowerCase();
      result.push(singleStr);
    }
  }
  return result.join("");
}

// strFunction("NabED");
console.log(strFunction("NabED"));
 */

/**
 * ================ Task: Letter Swapping  ======================
 * ShVoMaLLiK
 * akta String pass krvo capital and small letter combined kore
 * return krbe capital gulo small letter e and small gulo capital letter a
 * =========================================================
 */

/**
function letterSwapping(str) {
  if (typeof str !== "string") return false;
  arrLowerStr = str.toLowerCase();

  let swappedStr = [];
  for (let i = 0; i < str.length; i++) {
    if (arrLowerStr.search(str[i]) !== -1) {
      let singleStr = str[i].toUpperCase();
      swappedStr.push(singleStr);
    } else {
      let singleStr = str[i].toLowerCase();
      swappedStr.push(singleStr);
    }
  }
  console.log(swappedStr.join(""));
}

letterSwapping("ShVoMaLLiK");
 */

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
// -----------------------
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

/**
 * ================ Task: Find Second Largest Number  ====================
 * =======================================================================
 */
// Using Set of Number
// ---------------------
/**
function findSecondLargeNum(num) {
  if (typeof num !== "number") return false;
  numStr = num.toString();

  let result = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (result < numStr[i] - 1) {
      result = numStr[i];
    }
  }
  console.log(result);
}

findSecondLargeNum(1325664892);
 */

// Using Array 1st Way (Wrong)
// --------------------------
/**
const arrNum = [7, 2, 5, 8, 1, 9, 9];

function findSecdLarNum(arr) {
  if (Array.isArray(arr) !== true) return false;
  const sortedArr = arr.sort();
  const result = sortedArr[sortedArr.length - 2];
  console.log(result);
}

findSecdLarNum(arrNum);
 */

// Using Array 1st Way (Good Way)
// ------------------------------

// 1st Way Self Done
// -----------------
/**
const arrNum = [7, 2, 5, 8, 1, 9, 9];

function findSecdLarNum(arr) {
  if (Array.isArray(arr) !== true) return false;
  var UniqueNumArr = arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log(UniqueNumArr);
  var intArray = UniqueNumArr.map(Number);
  var second = intArray.sort(function (a, b) {
    return b - a;
  })[1];
  console.log(second);
}

findSecdLarNum(arrNum);
 */

// Best Way 01
// -----------
/**
function largestNumber(arr) {
  if (!Array.isArray(arr)) return false;

  var uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

  const sortedArr = uniqueArr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}

console.log(largestNumber([1, 2, 55, 21, 5, 90, 444]));
 */

// Best Way 02
// -----------
/**
function secondLargest(arr) {
  if (!Array.isArray(arr)) return false;

  let largest = [];
  let secondLargest = [];

  arr.forEach((item) => {
    // console.log(item);
    if (item > largest) {
      secondLargest = largest;
      largest = item;
    } else if (item > secondLargest && item < largest) {
      secondLargest = item;
    }
  });
  return secondLargest;
}

console.log(secondLargest([1, 7, 55, 21, 5, 90, 444]));
 */

/**
 * ====================================================================
 * ================ Task: Find Second Smallest Number  ================
 * ====================================================================
 */
// 1st Way Self Done
// -----------------
/**
const arrNum = [7, 2, 5, 8, 1, 9, 9];

function findSecdLarNum(arr) {
  if (Array.isArray(arr) !== true) return false;
  var UniqueNumArr = arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log(UniqueNumArr);
  var intArray = UniqueNumArr.map(Number);
  var second = intArray.sort(function (a, b) {
    return a - b;
  })[1];
  console.log(second);
}

findSecdLarNum(arrNum);
 */

/**
 * =====================================================================================
 * ================ Task: Create Phone Number Format: +880 xxxxx-xxxxxx ================
 * =====================================================================================
 */
// 1st Way (Not good)
// ------------------

/**
let rawString = "111.222.3333 / need to remove this text (some more text)";

const formatTelNumber = (phoneNumberString) => {
  let stringWithNumber = phoneNumberString.split("/")[0];
  let cleaned = ("" + stringWithNumber).replace(/\D/g, "");
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};
console.log(formatTelNumber(rawString));
 */
// 2nd Way (Not good)
// ------------------
/**
const getCountryCode = (number, cb) => {
  if (number) {
    return cb(number);
  }
};

const answer = getCountryCode("0151617583", (number) => {
  if (number.length === 11) {
    return `+88-${number.slice(0, 5)}-${number.slice(5, 11)}`;
  } else if (number.length === 10) {
    return `+91-${number.slice(0, 5)}-${number.slice(5, 10)}`;
  } else {
    return "Not Match Any Number Format";
  }
});

console.log(answer);
 */

// Best Way (Good Dynamic)
// -----------------------
/**
function phoneNumberFormat(format, phoneNumber) {
  let originalFormat = format;

  for (let i = 0; i < phoneNumber.length; i++) {
    originalFormat = originalFormat.replace("X", phoneNumber[i]);
  }
  console.log(originalFormat);
}

phoneNumberFormat("+88 XXXXX XXXXXX", "01516100125");
 */

/**
 * =======================================================================================
 * ===== Task 01: Find a longest word from a sentence - "Artificial Intelligence is a great technology" ======
 * single Hand only word "i" {"a" is not a word}
 * =======================================================================================
 */
// 1st Way (My Self)
// ------------------
/**
let sentence = "Artificial Intelligence is a great technology";

function longestWord(str) {
  if (typeof str !== "string") return false;
  let splitedStr = str.split(" ");

  let longestWord = "";
  for (let i = 0; i < splitedStr.length; i++) {
    if (longestWord.length < splitedStr[i].length) {
      longestWord = splitedStr[i];
    }
  }
  console.log(longestWord);
}

longestWord(sentence);
 */

// 2nd Way
// --------
/**
let sentence = "Artificial Intelligence is a great technology";

function longestWord(str) {
  if (typeof str !== "string") return false;
  let splitedStr = str.split(" ");
  let sortedArr = splitedStr.sort((a, b) => a.length - b.length);
  console.log(sortedArr[sortedArr.length - 1]);
}

longestWord(sentence);
 */

/**
 * =======================================================================================
 * ===== Task 02: Find a Smallest word from a sentence - "Artificial Intelligence is a great technology" ======
 * single Hand only word "i" {"a" is not a word}
 * =======================================================================================
 */
// 1st Way (My Self)
// ------------------
/**
let sentence = "Artificial Intelligence is a great technology";

function findShort(sentence) {
  const arr = sentence.split(" ");
  const sortedArr = arr.sort((a, b) => a.length - b.length);
  console.log(sortedArr[0]);
}

findShort(sentence);
 */

/**
 * =======================================================================================
 * ===== Task 03: Put Array in middle - array([1,2,3,8,9,10], [4,5,6,7]) => [1,2,3,4,5,6,7,8,9,10] ======
 * =======================================================================================
 */
/**
const arr1 = [1, 2, 8, 9, 10];
const arr2 = [3, 4, 5, 6, 7];

function concatArr(arr1, arr2) {
  if (!Array.isArray(arr1, arr2)) return false;
  let middleIndex = Math.floor(arr1.length / 2);
  arr1.splice(middleIndex, 0, ...arr2);
  console.log(arr1);
}

concatArr(arr1, arr2);
 */

/**
 * =======================================================================================
 * ===== Task 04: Sort array by element length- ["dddd", "a", "ccc", "bb"] -> ["a", "bb", "ccc", "dddd"] ======
 * =======================================================================================
 */
/**
const arr = ["dddd", "a", "ccc", "bb"];

function sortArr(arr) {
  if (!Array.isArray(arr)) return false;
  const sortedArr = arr.sort((a, b) => a.length - b.length);
  console.log(sortedArr);
}

sortArr(arr);
 */

/**
 * =======================================================================================
 * ===== Task 05: Find the absolute sum- ([2,-1, 4, -8, 10]) -> 7 ======
 * =======================================================================================
 */

/**
const arr1 = [2, -1, 4, -8, 10];

function absoluteSum(arr) {
  if (!Array.isArray(arr)) return false;

  let positiveTotal = 0;
  let negativeTotal = 0;
  arr.forEach((item) => {
    if (item < 0) {
      negativeTotal = negativeTotal + Math.abs(item);
    } else {
      positiveTotal = positiveTotal + Math.abs(item);
    }
  });

  console.log(positiveTotal - negativeTotal);
}

absoluteSum(arr1);
 */

/**
 * =======================================================================================
 * ===== Task 06: Make Product Base Array | One Array have many objects |
 * Mutiply Price x Qty Then Total Product Sum | Using Reduce Function ======
 *
 * const products=[
 * {name: "iPhone 13 Pro", price: 999, qty: 2},
 * {name: "iPhone 13 Pro", price: 999, qty: 2},
 * {name: "iPhone 13 Pro", price: 999, qty: 2},
 * {name: "iPhone 13 Pro", price: 999, qty: 2},
 * {name: "iPhone 13 Pro", price: 999, qty: 2},
 * ]
 * =======================================================================================
 */

// 1st Way
// ---------
/**
const products = [
  { name: "iPhone 13 Pro", price: 999, qty: 4 },
  { name: "iPhone 12 Pro", price: 500, qty: 3 },
  { name: "iPhone 11 Pro", price: 600, qty: 2 },
  { name: "iPhone 12 Pro", price: 750, qty: 5 },
  { name: "iPhone 14 Pro", price: 850, qty: 3 },
];

function cartTotal(arr) {
  if (!Array.isArray(arr)) return false;

  const singleArrTotal = [];
  let totalQty = 0;
  for (let i = 0; i < arr.length; i++) {
    singleArrTotal.push(arr[i].price * arr[i].qty);
    totalQty = totalQty + arr[i].qty;
  }

  console.log(
    `Total Ammount: ${singleArrTotal.reduce(
      (a, b) => a + b
    )} Total Quantity: ${totalQty}`
  );
}

cartTotal(products);
 */

const products = [
  { name: "iPhone 13 Pro", price: 999, qty: 4 },
  { name: "iPhone 12 Pro", price: 500, qty: 3 },
  { name: "iPhone 11 Pro", price: 600, qty: 2 },
  { name: "iPhone 12 Pro", price: 750, qty: 5 },
  { name: "iPhone 14 Pro", price: 850, qty: 3 },
];
products.reduce((prev, curr, index, arr) => {
  // console.log(prev);
  // return prev + curr.price;

  let singleArr = [];
  singleArr.push(arr.price * arr.qty);
  console.log(singleArr);
  // return arr.price * arr.qty;
}, 0);
