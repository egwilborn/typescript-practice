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
        console.log(parseInt(resultStr));
        return 0;
    };
    return Kata;
}());
exports.Kata = Kata;
Kata.squareDigits(9119); // 811181
Kata.squareDigits(765); // 493625
