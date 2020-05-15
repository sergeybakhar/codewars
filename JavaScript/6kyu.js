
// ======================
// Take a Ten Minute Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid.You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.The city provides its citizens with a Walk Generating App on their phones-- everytime you press the button it sends you an array of one - letter strings representing directions to walk(eg. ['n', 's', 'w', 'e']).You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters('n', 's', 'e', or 'w' only).It will never give you an empty array(that's not a walk, that's standing still!).

function isValidWalk(walk) {
  const cd = {
    n: 's',
    e: 'w',
    s: 'n',
    w: 'e'
  };
  if (cd[walk[0]] !== walk[walk.length - 1] ||
    walk.length !== 10) return false;
  const walkCounter = walk.reduce((acc, val) => {
    switch (val) {
      case 'n':
      case 'w':
        ++acc;
        break;
      case 's':
      case 'e':
        --acc;
    }
    return acc;
  }, 0);
  return walkCounter === 0 ? true : false;
}


// ======================
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const arrLetters = text.toLowerCase().split('').sort();
  const filteredArrLetters = arrLetters.filter((val, i) => (
    arrLetters[i] === arrLetters[i + 1]));
  return [...new Set(filteredArrLetters)].length;
}

function duplicateCount(text) {
  const arrLetters = text.toLowerCase().split('');
  const countLetters = arrLetters.reduce((acc, val) => {
    acc[val] = ++acc[val] || 1;
    if (acc[val] > 1 && !acc.amount.includes(val)) {
      acc.amount.push(val);
    }
    return acc;
  }, {
    amount: []
  })
  return countLetters.amount.length;
}


// ======================
// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  return numbers
    .join('')
    .replace(
      /(^[\d]{3})(\d{3})(\d{4})/,
      (_, p1, p2, p3) => `(${p1}) ${p2}-${p3}`
    );
}


// ======================
// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = function (n) {
  let counter = 0;
  let num = n;

  while (num > 0) {
    counter += num % 2;
    num = (num - num % 2) / 2;
  }
  return counter;
};


// ======================
// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a;
  } else {
    while (b.length > 0) {
      a = a.filter(num => num != b[0])
      b.shift();
    }
    return a
  }
}


// ======================
// Sum of Digits / Digital Root

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {

  if (String(n).length === 1) {
    return n;
  }

  const num = [...String(n)]
    .map(Number)
    .reduce((acc, val) => acc + val);

  return digital_root(num);
}


// ======================
// Who likes it ?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else {
    return 'no one likes this'
  }
}


// ======================
// Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  let counter = 0;

  function innerPersistence(num, counter) {
    const arr = [...String(num)]

    if (arr.length === 1) {
      return counter;
    }

    counter += 1;

    const innerNum = arr.reduce((acc, num) => acc * num, 1);

    return innerPersistence(innerNum, counter)

  }
  return innerPersistence(num, counter)
}


// ======================
// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  var arrEven = [];
  var arrOdd = [];
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] % 2 != 0) {
      arrEven.push(integers[i])
    } else {
      arrOdd.push(integers[i])
    }
  }
  return arrEven.length == 1 ? arrEven[0] : arrOdd[0];
}

const findOutlier = integers => {
  let count = 0;

  for (var i = 0; i < integers.length; i++) {
    if (integers[i] % 2 != 0) {
      ++count
    }
  }

  //   return count;
  let x;

  if (count == 1) {
    x = integers.filter(x => x % 2 != 0)

  } else {
    x = integers.filter(x => x % 2 == 0)
  }
  return x[0];
}


// ======================
// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (...args) => {
  const arr = args[0].split(' ');
  return arr.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word;
    }
  }).join(' ');
}


// ======================
// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net

function solution(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i;
    }
  }
  return sum;
}


// ======================
// Find the odd int

// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  var obj = A.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc;
  }, {})

  for (var prop in obj) {
    if (obj[prop] % 2 == 1) {
      return +prop
    }
  }
}


// ======================
// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  var count;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count = arr[i]
    }
  }
  return arr.filter(a => a != count)[0]
}


// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
// ======================
