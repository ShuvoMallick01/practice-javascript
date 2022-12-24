/**
---------
How Much is True?
---------
*/
/**
const countTrue = [true, false, false, true, false, true];

function count(arr) {
  let inArr = arr;
  let strTrue = "true";

  let result = 0;
  for (let i = 0; i < inArr.length; i++) {
    let inArr2 = inArr[i];

    if (inArr2 === true) {
      result += 1;
    }
  }

  return result;
}

console.log(count(countTrue));
 */

/**
 * ==========================================
 * Add up the Numbers from a Single Number
 * https://edabit.com/challenge/4gzDuDkompAqujpRi
 * ==========================================
 */
/**
function myFunction(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result = result + i;
  }
  // return result;
  console.log(result);
}

myFunction(4);
// console.log(myFunction(4));
 */

/**
 * ===============================================
 * A Redundant Function
 * Write a function redundant that takes in a string str and returns a function that returns str.
 * https://edabit.com/challenge/hzxN9bAebBPNqdQto
 * ===============================================
 */

const redundant = (str) => () => str;

console.log(redundant);
