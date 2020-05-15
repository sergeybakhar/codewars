
// ======================
// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const arrStats = arr => {
  return arr.reduce((acc, val) => {
    if (val > 0) {
      acc.sum = acc.sum + val;
      if (val > acc.maxNum) {
        acc.maxNum = val;
      }
    } else if (val < 0) {
      ++acc.negNumCount;
    }
    return acc;
  }, {
    sum: 0,
    maxNum: null,
    negNumCount: 0
  })
};

const maxSequence = arr => {
  if (arr.length === 0) return 0;

  const { sum, maxNum, negNumCount } = arrStats(arr);
  if (arr.length === negNumCount) return 0;
  if (negNumCount === 0) return sum;

  let arrTemp = [];
  let res = 0;
  arr.forEach(val => {
    arrTemp.push(val);
    let sum = arrTemp.reduce((acc, val) => acc + val, 0);
    if (sum >= maxNum && sum >= res) {
      res = arrTemp.reduce((acc, val) => acc + val, 0);
    }
    if (sum <= 0) {
      arrTemp = [];
    }
  })
  return res;
};

// ======================
// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  const args = [...arguments];
  args.map((val, i) => {
    if (val <= 0) {
      args[i] = '00';
    } else if (val > 255) {
      args[i] = 'FF';
    } else {
      let num = val.toString(16).toUpperCase();
      args[i] = num.length > 1 ? num : '0' + num;
    }
  })
  return args.join('');
}


// ======================
// Where my anagrams at?

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  let arr = [];

  words.map(w => {
    if (word.length === w.length) {
      let wCopy = w;
      let wordCopy = word;
      let reOutside = RegExp(`[${wordCopy}]`);

      for (let letter of w) {
        if (reOutside.test(wCopy)) {
          let reInside = RegExp(letter);
          wCopy = wCopy.replace(reInside, '');
          wordCopy = wordCopy.replace(reInside, '');
          reOutside = RegExp(`[${wordCopy}]`);
        }
      }
      if (wordCopy.length === 0) {
        arr.push(w);
      }
    }
  })
  return arr;
}


// ======================
// Directions Reduction

// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountain desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or

// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or

// { "WEST" }
// or

// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

const dirReduc = (arr, counter) => {

  if (counter === 0) return arr;

  let count = 0;
  const dirAbb = ["NORTHSOUTH", "SOUTHNORTH", "WESTEAST", "EASTWEST"]

  arr.map((dir, i) => {
    if (dirAbb.includes(dir + arr[i + 1])) {
      arr.splice(i, 2)
      count++;
    }
  })
  return dirReduc(arr, count);
}


// ======================
// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {

  let arr = ['00', '00', '00'];
  let hour = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = Math.floor(((seconds % 3600) % 60));

  arr[0] = hour > 10 ? hour : '0' + hour;
  arr[1] = min > 10 ? min : '0' + min;
  arr[2] = sec > 10 ? sec : '0' + sec;

  return arr.join(':');
}


// ======================
// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(val) {
  return !val ? 0 : val(0)
}

function one(val) {
  return !val ? 1 : val(1)
}

function two(val) {
  return !val ? 2 : val(2)
}

function three(val) {
  return !val ? 3 : val(3)
}

function four(val) {
  return !val ? 4 : val(4)
}

function five(val) {
  return !val ? 5 : val(5)
}

function six(val) {
  return !val ? 6 : val(6)
}

function seven(val) {
  return !val ? 7 : val(7)
}

function eight(val) {
  return !val ? 8 : val(8)
}

function nine(val) {
  return !val ? 9 : val(9)
}

function plus(val) {
  return function (num) {
    return num + val;
  }
}

function minus(val) {
  return function (num) {
    return num - val;
  }
}

function times(val) {
  return function (num) {
    return num * val;
  }
}

function dividedBy(val) {
  return function (num) {
    return Math.floor(num / val);
  }
}


// ======================
// Valid Parentheses

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  const arr = [...parens]
  const innerF = (arr) => {
    const arrInner = [...arr];
    arr.map((_, i, arr) => {
      if (arr[i] === '(' && arr[i + 1] === ')') {
        arr.splice(i, 2)
      }
    })
    return (arr.length === arrInner.length) ? arr : innerF(arr)
  }
  return innerF(arr).length > 0 ? false : true;
}


// ======================
// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  const arrFiltered = arr.filter(e => e !== 0);
  const numOfZeros = arr.length - arrFiltered.length;
  const arrOfZeros = Array(numOfZeros).fill(0);

  return arrFiltered.concat(arrOfZeros);
}


// ======================
// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const re = /\s/g;
  console.log(str.split(re))
  return str.split(re).map(val => {
    //     console.log(val.substring(0,1))
    if (val.search(/\W/g) !== -1) {
      val = val.substring(1) + val.substring(0, 1);
    } else {
      val = val.substring(1) + val.substring(0, 1) + "ay";
    }

    return val;
  }).join(' ');
}


// ======================
