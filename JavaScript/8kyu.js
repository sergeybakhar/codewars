// ======================
// Get Planet Name By ID

// The function is not returning the correct values. Can you figure out why?

// getPlanetName(3); // should return 'Earth'

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  return name;
}


// ======================
// Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  return games.reduce((acc, val) => {
    return acc += val[0] > val[2] ? 3 :
      val[0] === val[2] ? 1 : 0;
  }, 0);
}


// ======================
// Even or Odd

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}


// ======================
// Third Angle of a Triangle

// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b);
}


// ======================
// Multiply

function multiply(a, b) {
  return a * b;
}


// ======================
// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}


// ======================
// Count the Monkeys!

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
  let arr = [];
  let i = n;

  while (i !== 0) {
    arr.unshift(i);
    i--;
  }
  return arr;
}


// ======================
// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => x.reduce((acc, num) => acc * num);


// ======================
// Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
// n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
// n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  return (n % x + n % y) === 0;
}


// ======================
// DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// DNAtoRNA("GCAT") returns ("GCAU")
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}


// ======================
// Transportation on vacation

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let total = d * 40;

  return d >= 7 ? total - 50
    : d < 7 && d >= 3 ? total - 20
      : total;
}


// ======================
// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x.replace(/([1234]{1})|([56789]{1})/g, function (match, p1, p2) {
    if (p1) return 0;
    if (p2) return 1;
  });
}


// ======================
// Convert a Boolean to a String

// In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.

// A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true"/"True" or "false"/"False" (check the sample tests about what capitalization to use in a given language).

// A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.

// Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.

// For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about these enough in later exercises.

function booleanToString(b) {
  return b === true ? 'true' : 'false';
}


// ======================
// My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

function fixTheMeerkat(arr) {
  return arr.reverse();
}


// ======================
// Function 3 - multiplying two numbers

// This function has to be called multiply and needs to take two numbers as arguments, and has to return the multiplication of the two arguments.

const multiply = (...args) => args.reduce((acc, val) => acc * val);


// ======================
// Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

var Kata;

Kata = (function () {
  function Kata() { }

  Kata.getVolumeOfCuboid = function (length, width, height) {
    return length * width * height;
  };

  return Kata;

})();


// ======================
// Mr. Freeze

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
// mark the MrFreeze object instance as frozen

Object.freeze(MrFreeze);


// ======================
// You Can't Code Under Pressure #1

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}


// ======================
// Sum Arrays

// Write a method sum (sum_array in python, sumarray in julia, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

// Examples
// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

const sum = numbers => numbers.length === 0 ? 0 : numbers.reduce((sum, n) => sum + n);


// ======================
// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}


// ======================
// Count by X

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  var z = [];
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += x;
    z.push(sum);
  }
  return z;
}


// ======================
// Sentence Smash
// Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// var words = ['hello', 'world', 'this', 'is', 'great'];
// smash(words); // returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you will always get an array.
// What We're Testing
// We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

// Disclaimer
// This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.

function smash(words) {
  "use strict";
  return words.join(' ')
};


// ======================
// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}


// ======================
// Rock Paper Scissors!

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  } else if (
    p1 === 'scissors' && p2 === 'paper' ||
    p1 === 'rock' && p2 === 'scissors' ||
    p1 === 'paper' && p2 === 'rock'
  ) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
};


// ======================
// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

const doubleChar = str => str.split('').map(l => l + l).join('');


// ======================
// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  return array.map(function (num) {
    return num > 0 ? -Math.abs(num) : Math.abs(num);
  });
}


// ======================
// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  var countOfPositives = 0;
  var sumOfNegative = 0;

  if (!input || input.length == 0) {
    return [];
  } else {
    input.map(function (val) {
      val > 0 ? countOfPositives++ : sumOfNegative += val;
    });
    return [countOfPositives, sumOfNegative]
  }
}


// ======================
// Calculate average

// Write function avg which calculates average of numbers in given list.

const find_average = array => array.reduce((acc, val) => acc + val) / array.length;


// ======================
// Sum without highest and lowest number

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


// -- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function sumArray(array) {
  if (!array) {
    return 0;
  } else {
    var arrSorted = array.sort(function (a, b) {
      return a - b;
    });
    var sum = 0;
    for (var i = 1; i < array.length - 1; i++) {
      sum += array[i];
    }
    return sum;
  }
}


// ======================
// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

const areYouPlayingBanjo = name => name.match(/^r/gi) ?
  name + " plays banjo" :
  name + " does not play banjo";


// ======================
// Find Maximum and Minimum Values of a List

// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// #Notes

// You may consider that there will not be any empty arrays/vectors.

var min = function (list) {
  return list.reduce(function (acc, val) {
    return acc < val ? acc : val;
  })
}

var max = function (list) {
  return list.reduce(function (acc, val) {
    return acc > val ? acc : val;
  })
}


// ======================
// Reversed Strings

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str) {
  return str.split('').reverse().join('');
}


// ======================
// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  var i = 0;
  var sum = 0;
  do {
    sum += i;
    ++i;
  } while (i <= num)
  return sum;
}


// ======================
// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
  var message;
  haystack.map((val, i) => {
    if (val === 'needle') {
      return message = `found the needle at position ${i}`;
    }
  })
  return message;
}


// ======================
// Convert a String to a Number!

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7

var stringToNumber = function (str) {
  return Number(str);
}


// ======================
// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = numbers => numbers.reduce((acc, val) => acc + val * val, 0);


// ======================
// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

const countSheeps = arrayOfSheep => arrayOfSheep.reduce((acc, val) => {
  if (val === true) {
    acc++;
  }
  return acc;
}, 0)


// ======================
// Jenny's secret message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name) {

  if (name === "Johnny")
    return "Hello, my love!";

  return "Hello, " + name + "!";
}


// ======================
// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((acc, val) => {
      return acc < val ? acc : val;
    })
  }
}


// ======================
// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  var nameArr = name.split(' ');
  return (nameArr[0].charAt(0) + '.' + nameArr[1].charAt(0)).toUpperCase();
}


// ======================
// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

const distinct = a => a.filter((val, i) => {
  return i == a.indexOf(val);
});


// ======================
// Convert a string to an array

// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split('');
}


// ======================
// All Star Code Challenge #18

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
  return [...str].reduce((acc, l) => {
    if (l == letter) {
      acc++;
    }
    return acc;
  }, 0)
}

// ======================
// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  return beast.charAt(0) === dish.charAt(0) &&
    beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
}


// ======================
// Sleigh Authentication

// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  } else {
    return false;
  }
};


// ======================
// Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
  var str = ''
  for (var i = 0; i < string.length; i++) {
    if (string[i] == '5') {
      str += 'S';
    } else if (string[i] == '0') {
      str += 'O';
    } else if (string[i] == '1') {
      str += 'I';
    } else {
      str += string[i];
    }
  }
  return str;
}


// ======================
// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

const digitize = n => (n + '').split('').reverse().map(n => +n);


// ======================
// Merge two sorted arrays into one

// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr3 = [1, 3, 5, 7, 9];
// arr4 = [10, 8, 6, 4, 2];
// mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr5 = [1, 3, 5, 7, 9, 11, 12];
// arr6 = [1, 2, 3, 4, 5, 10, 12];
// mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

function mergeArrays(arr1, arr2) {
  var arr = (arr1.concat(arr2)).sort((a, b) => a - b);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 1)
    }
  }
  return arr;
}


// ======================
// Sum of Multiples

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
  var sum = 0;
  var count = 0;

  if (m <= 0) {
    count = "INVALID";
  } else {
    for (var i = 0; sum < m - n; i++) {
      sum += n;
      count += sum;
    }
  }
  return count;
}


// ======================
// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const boolToWord = bool => bool ? 'Yes' : 'No';


// ======================
// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false;
};


// ======================
// Hex to Decimal

// Complete the function which converts hex number(given as a string) to a decimal number.

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}


// ======================
// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  var dec = 0;
  var str = bin.split("").reverse().join("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      dec += Math.pow(2, i)
    }
  }
  return dec;
}


// ======================
// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

const makeNegative = num => {
  return num < 0 ? num :
    num > 0 ? Number('-' + num) :
      num
}


// ======================
// Man in the west

// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

const checkTheBucket = bucket => bucket.includes('gold');


// ======================
// Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

function century(year) {

  var yearString = '' + year;

  if (year <= 100) {

    return 1;

  } else if (yearString.slice(2, 4) == '00') {

    return Number(yearString.slice(0, 2));

  } else if (yearString.length == 4) {

    return Number(yearString.slice(0, 2)) + 1;

  } else if (yearString.length == 3) {

    return Number(yearString.charAt(0)) + 1;

  }
}


// ======================
// Kata Example Twist

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

// var websites = []

// add the value "codewars" to the websites array 1,000 times
var websites = []

for (var i = 0; i < 1000; i++) {
  websites.push('codewars');
}


// ======================
// Who is going to pay for the wall?

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return an array containing only the name as is"

function whoIsPaying(name) {
  var arr = [];

  if (name.length <= 2) {
    arr.push(name);
  } else {
    arr.push(name);
    arr.push(name.slice(0, 2))
  }
  return arr;
}


// ======================
// Grasshopper - Debug

// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9)
  return celsius;
}


// ======================
// The falling speed of petals

// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite compilcated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

let sakuraFall = v => v <= 0 ? 0 : 400 / v;


// ======================
// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = str => str.split('').splice(1, str.length - 2).join('');


// ======================
// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

let betterThanAverage = (classPoints, yourPoints) => {
  let average = classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
  return yourPoints > average ? true : false;
}


// ======================
// CSV representation of array

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

function toCsvText(array) {
  return array.join('\n');
}


// ======================
// Generate range of integers

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

function generateRange(min, max, step) {

  var arr = [];

  for (var i = min; i <= max; i += step) {
    arr.push(min);
    min += step;
  }
  return arr;
}


// ======================
// Be Concise III - Sum Squares

// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!

let sumSquares = array => {
  let res = array.reduce((sum, current) => {
    return sum + current * current;
  }, 0);
  return res;
}


// ======================
// Simple Fun #352: Reagent Formula

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// Happy Coding ^_^

function isValid(formula) {

  if (formula.indexOf(1) != -1) {
    if (formula.indexOf(2) != -1) {
      return false;
    }
  }

  if (formula.indexOf(3) != -1) {
    if (formula.indexOf(4) != -1) {
      return false;
    }
  }

  if (formula.indexOf(5) != -1) {
    if (formula.indexOf(6) == -1) {
      return false;
    }
  }

  if (formula.indexOf(6) != -1) {
    if (formula.indexOf(5) == -1) {
      return false;
    }
  }

  if (formula.indexOf(7) == -1) {
    if (formula.indexOf(8) == -1) {
      return false;
    }
  }

  return true;
}


// ======================
// Cat years, Dog years

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {

  var catYears = 0;
  var dogYears = 0;
  var arr = [];

  for (var i = 1; i <= humanYears; i++) {
    if (i == 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i == 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }

  arr.push(humanYears, catYears, dogYears)

  return arr;
}


// ======================
// Returning Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  return `Hello, ${name} how are you doing today?`
}


// ======================
// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x) {
  return x.map(x => x * 2);
}


// ======================
// Return the day

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) {

  switch (num) {
    case 1: return 'Sunday';
      break;
    case 2: return 'Monday';
      break;
    case 3: return 'Tuesday';
      break;
    case 4: return 'Wednesday';
      break;
    case 5: return 'Thursday';
      break;
    case 6: return 'Friday';
      break;
    case 7: return 'Saturday';
      break;
    default: return 'Wrong, please enter a number between 1 and 7';
  }
}


// ======================
// Multiple of index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
  var arr = [];
  array.forEach((item, index) => {
    if (item % index == 0) {
      arr.push(item);
    }
  });
  return arr;
}


// ======================
// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!

var quote = function (fighter) {
  if (/George Saint Pierre/i.test(fighter)) {
    return "I am not impressed by your performance.";
  } else {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
};


// ======================
// Do you speak "English"?

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
  if (sentence.toLowerCase().indexOf('english') > -1) {
    return true;
  } else {
    return false;
  }
}


// ======================
// Reversed sequence

// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {

  var arr = [];

  for (var i = 1; i <= n; i++) {
    arr.unshift(i);
  }

  return arr;
};


// ======================
// Broken Counter

// Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};


// ======================
// Power

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some others Math functions are disabled on final tests.

function numberToPower(number, power) {
  var num = 1;

  for (var i = 0; i < power; i++) {
    num = num * number;
  }
  return num;
}


// ======================
// You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  var res;

  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      res = true;
      break;
    } else {
      res = false;

    }
  }
  return res;
}


// ======================
// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  var sum;
  if (arr.length === 0) {
    return 0;
  } else {
    var result = arr.reduce(function (sum, current) {
      if (current > 0) {
        return sum + current;
      } else {
        return sum;
      }
    }, 0)
    return result;
  }
}


// ======================
// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

// stringClean('! !') == '! !'
// stringClean('123456789') == ''
// stringClean('This looks5 grea8t!') == 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  return s.replace(/[0123456789]/g, '');
}


// ======================
// Beginner Series #2 Clock

// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

// Example:
// past(0, 1, 1) == 61000
// Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

function past(h, m, s) {
  return (s * 1000) + (m * 60000) + (h * 3.6e+6);
}


// ======================
// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need.

// Example:
// paperwork(5, 5) == 25
// Note: if n < 0 or m < 0 return 0!

// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {

  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}


// ======================
// Welcome!

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
  var country = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso"
  }
  var counter = 0;
  for (var key in country) {

    if (language == key) {
      return country[key];

    }
    if (language == key) {
      counter++;

    }

  }
  if (counter === 0) {
    return "Welcome";
  }

}


// ======================
// Do I get a bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary *= 10;
    return '£' + salary;
  } else {
    return '£' + salary
  }
}


// ======================
// Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replace(/ /g, '')
}


// ======================
// Opposite number

// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  if (number < 0) {
    return Math.abs(number);
  } else {
    return Number("-" + number);
  }
}


// ======================
// Unfinished Loop - Bug Fixing #1

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}


// ======================
// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
  var x;
  x = eval(value1 + operation + value2);
  return x;

}


// ======================
// String repeat

// Write a function called repeatString which repeats the given String src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  var x = '';

  for (i = 0; i < n; i++) {
    x = x + s;
  }

  return x;
}


// ======================
// Training JS #13: Number object and its properties

// The number is a basic data type in javascript. javascript also supports Number objects. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor Number(). Although it is not necessary to do so. Usage:

// var num=new Number(value);
// Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.

// Constructor Number() can be used without operator new and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN). Usage:

// var num=Number(value);
// Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.

// In addition to the above two, the Number objects have five attributes (or called constant):

// 1.MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

// 2.MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324

// 3.NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.

// Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared with Number.NaN to detect a value is not a number but can only call isNaN() to compare.

// 4.NEGATIVE_INFINITY: The value represents the negative infinity. Usage:Number.NEGATIVE_INFINITY. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.

// 5.POSITIVE_INFINITY: The value represents the positive infinity. Usage:Number.POSITIVE_INFINITY. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.

// Ok, lesson is over. let's us do some task with Number objects.

// #Task
// Coding in function ```whatNumberIsIt```. function accept 1 parameter:```n```. it's a number.

// To judge the number ```n```. If n is one of the above five constants, return one of these string:

// ```
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// ```

// Other values should return ```"Input number is xxx"```. xxx means this number.

// For example:
// ```
// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// ```
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

function whatNumberIsIt(n) {
  if (n >= Number.MAX_VALUE && n < Infinity) {
    return "Input number is Number.MAX_VALUE";
  } else if (n <= Number.MIN_VALUE && n > -Infinity) {
    return "Input number is Number.MIN_VALUE";
  } else if (isNaN(n) === true) {
    return "Input number is Number.NaN";
  } else if (n == -Infinity) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n == Infinity) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {
    return "Input number is " + n;
  }

}


// ======================
// Training JS #11: loop statement --break,continue

// We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

// function findFirstOddNumber(arr){
//   var result;
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==1){
//       result=arr[i];
//       break;
//     }
//   }
//   return result;
// }
// In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

// In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

// function dontDisplayNegative(arr){
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]<0) continue;   
//     console.log(arr[i])
//   }
// }
// In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

// Through the use of break and continue, you can make the loop statement more flexible and convenient.

// Ok, lesson is over. let's us do some task with break and continue.

// #Task
// Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.

// You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. 

// When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element. 

// Return the ```bag``` after for loop finished.

// You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.

// If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).

function grabDoll(dolls) {
  var bag = [];
  for (var i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Barbie doll" || dolls[i] == "Hello Kitty") {
      bag.push(dolls[i]);
      if (bag.length > 2) break;
    } else {
      continue;
    }

  }

  return bag;
}


// ======================
// Training JS #6: Basic data types--Boolean and conditional statements if..else

// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^

// Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

// var arr=[];
// ...
// ...
// ......
// if (arr.length) return "arr has elements";
// else            return "arr is empty";
// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

// These values are converted to false in the conditional statement:

// 0, -0, "", null, undefined, NaN
// #Task
// Coding in function ```trueOrFalse```, function accept 1  parameters:```val```, try to use the conditional statement if...else, if ```val``` value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function trueOrFalse(val) {
  if (val == false | val == null) { return 'false' }
  else return 'true';
}


// ======================
// Training JS #5: Basic data types--Object

// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// #Task
// Give you a function ```animal```, accept 1 parameter:```obj``` like this:

// ```
// {name:"dog",legs:4,color:"white"}
// ``` 

// and return a string like this:

// ```
// "This white dog has 4 legs."
// ```
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

var obj = { name: "dog", legs: 4, color: "white" };

function animal(obj) {

  text = ("This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.");
  return text;
  //return console.log("This " + obj.color + " " + obj.name + " has " + obj.legs + " legs");
}

animal(obj);


// ======================
// Training JS #4: Basic data types--Array

// In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// #Task
// I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.
//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {

  return arr[0];
}
function getLast(arr) {

  return arr[arr.length - 1]
}
function pushElement(arr) {
  var el = 1;

  arr.push(el);

  return arr
}
function popElement(arr) {


  arr.pop();
  return arr
}


// ======================
// Training JS #3: Basic data types--String

// In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

// String can use operators +, Connect two or more strings together.

// #Task
// misson 1:
// I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// misson 2:
// After misson 1 finished. you should click "Submit" to see my three questions, and write the answer in function ```answer1, answer2,answer3```

// If everything is right, click "Submit" again to submit your code pass this kata.

var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}


// ======================
// Training JS #2: Basic data types--Number

// In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %

// #Task
// I've written five function ```equal1,equal2,equal3,equal4,equal5```, defines six global variables ```v1 v2 v3 v4 v5 v6```, every function has two local variables ```a,b```, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example  to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

var v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v4   //set number value to a
  var b = v2   //set number value to b
  return a - b;
}
function equal3() {
  var a = v1   //set number value to a
  var b = v5   //set number value to b
  return a * b;
}
function equal4() {
  var a = v4   //set number value to a
  var b = v5   //set number value to b
  return a / b;
}
function equal5() {
  var a = v6   //set number value to a
  var b = v3   //set number value to b
  return a % b;
}


// ======================
// Training JS #1: create your first JS function and print "Helloworld!"

// In javascript, your code is running in a function, let us step by step complete your first JS function.

// Look at this example:

//       --------keyword "function"
//       |       ----your function name  
//       |       |    ---if needed, some arguments will appear in brackets
//       |       |    |
//     function myfunc(){  ---------your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"
// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

// function printWordToScreen(){
//   var somewords="This is an example."
//   console.log(somewords)
// }
// If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method help your work, you will become more and more like it.

// Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}



// ======================
// Chuck Norris VII - True or False? (Beginner)

// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo() {
  return 0 == 1;
}


// ======================
// Convert a Number to a String!

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

function numberToString(num) {
  return String(num);
}