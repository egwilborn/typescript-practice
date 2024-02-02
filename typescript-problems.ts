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

number(["a", "b", "c"]); //--> ["1: a", "2: b", "3: c"]
