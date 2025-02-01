/* Testing 1-2-3
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.*/

function number(array) {
    return array.map((str, index) => `${index + 1}: ${str}`);
}

array = ["a", "b", "c"]
console.log(number(array))