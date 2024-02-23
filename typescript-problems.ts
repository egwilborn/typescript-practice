// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct
// number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

function number(arr: string[]): string[] {
  // need to set a variable to contain the array of strings to return
  const result: string[] = [];
  // loop over array and contcat the desired characters then push into results array
  arr.forEach((char: string, idx: number) => {
    let newLine = `${idx + 1}: ${char}`;
    result.push(newLine);
  });
  return result;
}

// number(["a", "b", "c"]); //--> ["1: a", "2: b", "3: c"]

// A square of squares
// You like building blocks. You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an
// ordinary rectangle! Those blasted things! If you just had a way to know, whether you're
// currently working in vain… Wait! That's it! You just have to check if your number of building
// blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

function isSquare(n: number): boolean {
  // first handle negative numbers
  // then handle zero
  // then, if sqrt of num = floor of sqrt of num then true
  if (n < 0) {
    return false;
  }
  if (Math.sqrt(n) === Math.floor(Math.sqrt(n)) || n === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(4));
// console.log(isSquare(25));
// console.log(isSquare(26));

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because
// 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

export class Kata {
  static squareDigits(num: number): number {
    // swtich input to string
    const numStr = num.toString();
    //define array for result
    const result: string[] = [];
    // loop over str
    for (let char of numStr) {
      // square each number and push to new array
      let charNum = parseInt(char);
      result.push((charNum * charNum).toString());
    }
    // join array and convert to num
    const resultStr = result.join("");
    // may the code be with you
    return parseInt(resultStr);
  }
}
// Kata.squareDigits(9119); // 811181
// Kata.squareDigits(765); // 493625

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one
// word is present.

// Examples:
function spinWords(words: string): string {
  //first split string at each space
  const splitWords = words.split(" ");
  // make results array
  const results: string[] = [];
  // loop over each word
  splitWords.forEach((word) => {
    if (word.length >= 5) {
      // if word is bigger than 5 letters, then reverse it
      const reverseWord = word.split("").reverse().join("");
      results.push(reverseWord);
    } else {
      //push into new array
      results.push(word);
    }
  });
  // return results array joined
  return results.join(" ");
}

// spinWords("Hey fellow warriors"); //  --> "Hey wollef sroirraw"
// spinWords("This is a test"); //        --> "This is a test"
// spinWords("This is another test"); // --> "This is rehtona test"

// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input
// String will only contain valid consecutive numbers.

function order(words: string): string {
  if (words.length === 0) return "";
  const wordsArray = words.split(" ");
  const resultsArray: string[] = [];
  // loop over array
  wordsArray.forEach((word: string) => {
    const regex = /(\d+)/;
    const index: any[] | null = word?.match(regex);
    // reassign the word in new array based on number within
    resultsArray[parseInt(index![0]) - 1] = word;
  });
  // join array and return string
  return resultsArray.join(" ");
}

// Examples
// order("is2 Thi1s T4est 3a"); //-->  "Thi1s is2 3a T4est"
// order("4of Fo1r pe6ople g3ood th5e the2"); //  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// order(""); //  -->  ""

// Complete the solution so that it returns true if the first argument(string) passed in
// ends with the 2nd argument (also a string).

// Examples:

function solution(str: string, ending: string): boolean {
  // figure out the length of the ending string
  const count = ending.length;
  // cut everything until that last bit
  const strArray = str.split("");
  strArray.splice(0, str.length - count);
  // check to see if it's the same as the ending
  if (strArray.join("") === ending) {
    return true;
  } else {
    return false;
  }
}

// solution("abc", "bc"); // returns true
// solution("abc", "d"); // returns false

//alternatively -- using endsWith()
// function solution2(str: string, ending: string): boolean {
//   if (str.endsWith(ending)) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }
// solution2("abc", "bc"); // returns true
// solution2("abc", "d"); // returns false

// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element
// has the smallest index is the solution.
function sumPairs(ints: number[], s: number): [number, number] | void {
  //---- Pseudocode first -----//
  //sort the ints into a new array -- merge sort --- make helper functions
  //first make a function to merge sorted arrays
  function mergeArr(arr1: number[], arr2: number[]): number[] {
    let results: number[] = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }
  // then write the merge sort function using the above helper function
  function mergeSort(arr: number[]): any {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArr(left, right); // note: this line only works with the course version of merge not yours
  }
  const sortedInts = mergeSort(ints);
  // use multiple pointers method to determine ALL possible pairs that add up to s
  //Define results array to store all answers
  const results: any[] = [];
  // make a storing function to place all possible pairs in an array
  function storePair(x: number, y: number) {
    let iIndex = ints.indexOf(sortedInts[x]);
    let jIndex = ints.indexOf(sortedInts[y]);
    if (sortedInts[x] === sortedInts[y]) {
      const indexes = ints.reduce((a: any[], e: number, i: number) => {
        if (e === sortedInts[x]) a.push(i);
        return a;
      }, []);
      iIndex = indexes[0];
      jIndex = indexes[1];
    }
    if (iIndex > jIndex) {
      results.push([ints[jIndex], ints[iIndex], jIndex, iIndex]);
    } else if (jIndex > iIndex) {
      results.push([ints[iIndex], ints[jIndex], iIndex, jIndex]);
    }
  }
  // define pointers
  let i = 0;
  let j = sortedInts.length - 1;
  // write loop -- while loop
  while (j > i) {
    //start by adding the first and last numbers, then move either up or down depending on above or below target
    const sum = sortedInts[i] + sortedInts[j];
    if (sum > s) {
      j--;
    } else if (sum < s) {
      i++;
    } else if (sum === s) {
      // when you find a pair, store both numbers and their indexes in ints into a new 4-item array -- make a helper function
      storePair(i, j);
      j--;
    }
  }
  // once you have looped through sorted array and have all possible combos, loop through the results array or arrays
  let winningItem = results[0];
  results.forEach((item) => {
    if (item[3] < winningItem[3]) {
      winningItem = item;
    }
  });
  if (results.length > 0) {
    return [winningItem[0], winningItem[1]];
  } else {
    return undefined;
  }
}
sumPairs([11, 3, 7, 5], 10);
// #          ^--^      3 + 7 = 10
// == [3, 7]

sumPairs([4, 3, 2, 3, 4], 6);
[2, 3, 3, 4, 4];
// #      ^-----^         4 + 2 = 6, indices: 0, 2 *
// #         ^-----^      3 + 3 = 6, indices: 1, 3
// #             ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

sumPairs([0, 0, -2, 3], 2);
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

sumPairs([10, 5, 2, 3, 7, 5], 10);
// #  5 + 5 = 10, indices: 1, 5
// #  3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

/** return the output array and ignore all non-op characters */
function parse(data: string): number[] {
  let num = 0;
  let output: number[] = [];
  for (let char of data) {
    if (char === "i") {
      num++;
    } else if (char === "d") {
      num--;
    } else if (char === "s") {
      num = num * num;
    } else if (char === "o") {
      output.push(num);
    }
  }

  return output;
}

console.log(parse("iiisdoso")); //=> [8, 64]
