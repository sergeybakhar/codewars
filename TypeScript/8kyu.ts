// ======================
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num: number): string {
  let counter: number = 1;
  let sheepTxt: string = "";

  while (counter <= num) {
    sheepTxt += `${counter} sheep...`;
    counter++;
  }
  return sheepTxt;
}

// ======================
// Opposite number
// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
export class Kata {
  static opposite(n: number) {
    return n * -1;
  }
}

// ======================
// Multiply

function multiply(a: number, b: number): number {
  return a * b;
}
