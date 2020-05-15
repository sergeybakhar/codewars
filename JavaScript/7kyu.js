
// ======================
// Sum of odd numbers

// Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index(starting at index 1) e.g.:
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  let firstNum = 1;
  let arr = [[firstNum]];

  for (let i = 1; i <= n; i++) {
    let arrInner = [];
    while (arrInner.length !== i + 1) {
      firstNum += 2;
      arrInner.push(firstNum);
    }
    arr.push(arrInner);
  }
  return arr[n - 1].reduce((acc, val) => acc + val);
}


// ======================
// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a, b) {
  let num = a + b;
  let binaryNum = '';
  while (num !== 0) {
    binaryNum = num % 2 + binaryNum;
    num = Math.floor(num / 2);
  }
  return binaryNum;
}


// ======================
// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}


// ======================
// Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// #Examples:

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

const printerError = s => {
  let errors = s.match(/[^a-m]/g);
  return `${errors ? errors.length : 0}/${s.length}`;
};


// ======================
// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

const maskify = cc => cc.length > 4 ? [...cc].fill('#', 0, cc.length - 4).join('') : cc;


// ======================
// Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

const isInt = (num) => num === (num | 0);

const findNextSquare = sq => {

  let sqrtNum = Math.sqrt(sq);
  let ps = sq;
  let sqrtNumNext;

  if (isInt(sqrtNum)) {
    do {
      ps++;
      sqrtNumNext = Math.sqrt(ps);
    } while (!isInt(sqrtNumNext))
    return ps;
  }
  return -1;
}


// ======================
// Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
  let i = 0;
  while (p > p0) {
    p0 = p0 + p0 * percent / 100 + aug;
    i++;
  }
  return i;
}


// ======================
// Is this a triangle?

// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) return true;
  else return false;
}


// ======================
// Two to One

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => [...new Set([...s1, ...s2].sort())].join('');


// ======================
// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  const arrOfStrings = [...str.toLowerCase()].sort();
  let isIsogram = true;

  for (let i = 0; i < arrOfStrings.length; i++) {
    if (arrOfStrings[i] == arrOfStrings[i + 1]) {
      isIsogram = false;
      break;
    }
  }

  return isIsogram;
}


// ======================
// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
};


// ======================
// Product of Array Items

// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

const product = values => (
  values === null || values.length === 0 ? (
    null
  ) : (
      values.reduce((acc, val) => acc * val)
    ));


// ======================
// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.reduce((acc, val) => {
    if (typeof val == 'number') {
      acc.push(val);
    }
    return acc;
  }, [])
}


// ======================
// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = s => s.split(' ').sort((a, b) => a.length - b.length)[0].length;


// ======================
// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = str => {
  let obj = [...str.toLowerCase()].reduce((acc, val) => {
    ('x' in acc) ? acc[val]++ : acc[val]++;
    return acc;
  }, { o: 0, x: 0 })
  return obj.o === obj.x;
}


// ======================
// Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const descendingOrder = n => +[...n + ''].sort((a, b) => b - a).join('');


// ======================
// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna) {

  let arr = [...dna]

  arr.map((_, i) => {
    if (arr[i] === 'A') {
      arr[i] = 'T'
    } else if (arr[i] === 'T') {
      arr[i] = 'A'
    } else if (arr[i] === 'C') {
      arr[i] = 'G'
    } else if (arr[i] === 'G') {
      arr[i] = 'C'
    }
  })

  return arr.join('');
}


// ======================
// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  var arr = numbers.split(' ').sort(function (a, b) {
    return a - b;
  });
  return arr.slice(-1) + ' ' + arr.slice(0, 1);
}


// ======================
// You're a square!

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

const isSquare = n => Math.sqrt(n) % 1 === 0;


// ======================
// Jaden Casing Strings

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  return this.split(' ').map(val => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }).join(' ')
};


// ======================
// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = str => str.match(/[^aeiou]/gi).join('');


// ======================
// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

const getCount = str => {
  return [...str].reduce((acc, val) => {
    if (/[aeiou]/.exec(val)) {
      acc++;
    }
    return acc;
  }, 0)
}


// ======================
// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.substr((s.length / 2) - 1, 2)
  } else {
    return s.substr((Math.floor(s.length / 2)), 1)
  }
}


// ======================
// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = s => {
  var sArr = s.toLowerCase().split('');

  sArr.map((val, i) => {
    sArr[i] = val.toUpperCase() + val.repeat(i);
  })

  return sArr.join('-');
}


// ======================
// Multiply characters

// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

function spam(number) {
  var hue = '';

  while (number > 0) {
    hue += 'hue';
    number--;
  }
  return hue;
}


// ======================
// Find the nth Digit of a Number

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples
// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

var findDigit = function (num, nth) {
  var str = num + '';

  if (str.charAt(0) === '-') {
    str = str.slice(1)
  }

  if (nth >= num.length) {
    return 0;
  } else if (nth <= 0) {
    return -1;
  } else {
    return +str.slice(-nth, -nth + 1);
  }

}


// ======================
// Arithmetic progression

// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, r, n) {
  var arr = [a];
  var num = a;

  for (var i = 0; i < n - 1; i++) {
    arr.push(num += r)
  }
  return arr.join(', ');
}


// ======================
// Credit card issuer checking

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

function getIssuer(number) {

  var n = number.toString();
  var amex = /(^37|^34)/g;
  var discover = /^6011/g;
  var mastercard = /^[5][1-5]/g;
  var visa = /^4/g;

  if (n.match(amex) && n.length === 15) {
    return "AMEX";
  } else if (n.match(discover) && n.length === 16) {
    return "Discover";
  } else if (n.match(mastercard) && n.length === 16) {
    return "Mastercard";
  } else if (n.match(visa) && (n.length === 13 || n.length === 16)) {
    return "VISA";
  } else {
    return "Unknown";
  }
}


// ======================
// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {

  var numToString = num.toString();
  var exp;
  var sum = '';

  for (var i = 0; i < numToString.length; i++) {
    exp = numToString.charAt(i) * numToString.charAt(i);
    sum += exp;
  }
  return +sum;
}



// ======================
// Scrolling Text

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text) {
  text = text.toUpperCase();
  var arr = [text];
  for (var i = 1; i < text.length; i++) {
    var extract = text.slice(1).concat(text[0]);
    arr.push(extract);
    text = extract;
  }
  return arr;
}


// ======================
// Recycle!

// You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

// Red: Plastics, Green: Glass, Blue: Card.

// You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

// Plastics > 0, Glass < 0, Card = 0

recycleMe = recycle => {
  var arr = [0, 0, 0]

  recycle.map((item, i) => {
    if (recycle[i] > 0) {
      arr[0] += 1
    } else if (recycle[i] < 0) {
      arr[1] += 1
    } else {
      arr[2] += 1
    }
  })
  return arr;
}


// ======================
// Not all but sometimes all

// Write

// function remove(str, what)
// that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what. For example:

// remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
// // remove from 'this is a string' the first 1 't' and the first 2 i's.
// remove('hello world',{'x':5, 'i':2}) === 'hello world'
// // there are no x's or i's, so nothing gets removed
// remove('apples and bananas',{'a':50, 'n':1}) === 'pples d bnns'
// // we don't have 50 a's, so just remove it till we hit end of string.

function remove(str, what) {
  for (var key in what) {
    for (var i = 0; i < what[key]; i++) {
      str = str.replace(key, '');
    }
  }
  return str;
}


// ======================
// The Coupon Code

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

  var re = /,[ ]|[ ]/;

  var current = currentDate.split(re);

  var monthCurrent = current[0];
  var dayCurrent = parseInt(current[1], 10);
  var yearCurrent = parseInt(current[2], 10);


  switch (monthCurrent) {
    case 'January':
      monthCurrent = 1;
      break;
    case 'February':
      monthCurrent = 2;
      break;
    case 'March':
      monthCurrent = 3;
      break;
    case 'April':
      monthCurrent = 4;
      break;
    case 'May':
      monthCurrent = 5;
      break;
    case 'June':
      monthCurrent = 6;
      break;
    case 'July':
      monthCurrent = 7;
      break;
    case 'August':
      monthCurrent = 8;
      break;
    case 'September':
      monthCurrent = 9;
      break;
    case 'October':
      monthCurrent = 10;
      break;
    case 'November':
      monthCurrent = 11;
      break;
    case 'December':
      monthCurrent = 12;
      break;
  }


  var re1 = /,[ ]|[ ]/;

  var expiration = expirationDate.split(re1);

  var monthExp = expiration[0];
  var dayExp = parseInt(expiration[1], 10);
  var yearExp = parseInt(expiration[2], 10);

  parseInt(monthExp);
  parseInt(dayExp);
  parseInt(yearExp);

  switch (monthExp) {
    case 'January':
      monthExp = 1;
      break;
    case 'February':
      monthExp = 2;
      break;
    case 'March':
      monthExp = 3;
      break;
    case 'April':
      monthExp = 4;
      break;
    case 'May':
      monthExp = 5;
      break;
    case 'June':
      monthExp = 6;
      break;
    case 'July':
      monthExp = 7;
      break;
    case 'August':
      monthExp = 8;
      break;
    case 'September':
      monthExp = 9;
      break;
    case 'October':
      monthExp = 10;
      break;
    case 'November':
      monthExp = 11;
      break;
    case 'December':
      monthExp = 12;
      break;
  }

  var date;

  if (yearCurrent > yearExp) {
    date = false;
  } else if (yearCurrent < yearExp) {
    date = true;
  } else if (yearCurrent === yearExp) {
    if (monthCurrent > monthExp) {
      date = false;
    } else if (monthCurrent < monthExp) {
      date = true;
    } else if (monthCurrent === monthExp) {
      if (dayCurrent > dayExp) {
        date = false;
      } else {
        var date = true;
      }
    }
  }

  if ((enteredCode === correctCode) && (date)) {
    return true;
  } else {
    return false;
  }

}


// ======================
// Number of People in the Bus

// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  var sum = 0;
  for (var i = 0; i < busStops.length; i++) {
    sum += (busStops[i][0] - busStops[i][1]);
  }
  return sum;
}


// ======================
// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a, b) {
  var count = 0;

  if (a === b) {
    return a;
  } else if (a < b) {
    for (var i = a; i <= b; i++) {

      console.log('as  ' + i);
      count = count + i;

    }

    return count;

  } else if (a > b) {
    for (var i = b; i <= a; i++) {

      count = count + i;

    }
    return count;
  }
}


// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
