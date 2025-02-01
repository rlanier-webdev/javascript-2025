/*  Convert human years to dog years
    The first two years of a dog’s life count as 10.5 dog years each.
    Each year following equates to 4 dog years.
*/

const myAge = 40; // my age

let earlyYears = 2; // the first two years of a dog's life
earlyYears *= 10.5; 

let laterYears = myAge - 2; // subtract the first two years
laterYears *= 4; // each year following equates to 4 dog years

let myAgeInDogYears = earlyYears + laterYears;
const myName = 'Ray'.toLowerCase(); // my name in lowercase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);