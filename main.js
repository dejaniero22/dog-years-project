//Assigns a human age to the variable my age
const myAge = 29;

//First 2 years of a dog’s life count as 10.5 dog years each
let earlyYears = 2 * 10.5;

//Subtracts the first 2 years as they are accounted for by earlyYears and then multiplies each of the following laterYears by 4
laterYears = (myAge - 2) * 4;

//This adds the two prior calculations together to calculate age in dog years
myAgeInDogYears = (earlyYears + laterYears);

// Assings my name to the variable myName always in lowercase
let myName = ("Rio".toLowerCase());

//This combines all of the above information into a console logged statement.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
