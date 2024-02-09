"use strict";
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
// Write a function which takes a list of strings and returns each line prepended by the correct
// number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
function number(arr) {
    // need to set a variable to contain the array of strings to return
    var result = [];
    // loop over array and contcat the desired characters then push into results array
    arr.forEach(function (char, idx) {
        var newLine = "".concat(idx + 1, ": ").concat(char);
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
function isSquare(n) {
    // first handle negative numbers
    // then handle zero
    // then, if sqrt of num = floor of sqrt of num then true
    if (n < 0) {
        return false;
    }
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n)) || n === 0) {
        return true;
    }
    else {
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
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        // swtich input to string
        var numStr = num.toString();
        //define array for result
        var result = [];
        // loop over str
        for (var _i = 0, numStr_1 = numStr; _i < numStr_1.length; _i++) {
            var char = numStr_1[_i];
            // square each number and push to new array
            var charNum = parseInt(char);
            result.push((charNum * charNum).toString());
        }
        // join array and convert to num
        var resultStr = result.join("");
        // may the code be with you
        return parseInt(resultStr);
    };
    return Kata;
}());
exports.Kata = Kata;
// Kata.squareDigits(9119); // 811181
// Kata.squareDigits(765); // 493625
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one
// word is present.
// Examples:
function spinWords(words) {
    //first split string at each space
    var splitWords = words.split(" ");
    // make results array
    var results = [];
    // loop over each word
    splitWords.forEach(function (word) {
        if (word.length >= 5) {
            // if word is bigger than 5 letters, then reverse it
            var reverseWord = word.split("").reverse().join("");
            results.push(reverseWord);
        }
        else {
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
function order(words) {
    if (words.length === 0)
        return "";
    var wordsArray = words.split(" ");
    var resultsArray = [];
    // loop over array
    wordsArray.forEach(function (word) {
        var regex = /(\d+)/;
        var index = word === null || word === void 0 ? void 0 : word.match(regex);
        // reassign the word in new array based on number within
        resultsArray[parseInt(index[0]) - 1] = word;
    });
    // join array and return string
    return resultsArray.join(" ");
}
// Examples
order("is2 Thi1s T4est 3a"); //-->  "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2"); //  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
order(""); //  -->  ""
