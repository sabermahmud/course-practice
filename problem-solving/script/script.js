
// # js-problems-practice-tasks-part1


/*
### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
*/
// Formula:(0°C × 9/5) + 32 = 32°F
// function convertCelsiusToFahrenheit(celsius) {

//     const toFahrenheit = (celsius * 9) / 5 + 32
//     return toFahrenheit
// }

// const fahrenheit = convertCelsiusToFahrenheit(1);
// console.log(fahrenheit);

/*
### Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input:
numbers = [5,6,11,12,98, 5]
find: 5
output: 2
<br/>
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/
// const numbers = [5, 6, 11, 11, 98, 5];

// function countOccurrences(numbers, targetNumber) {
//     let count = 0;
//     for (const number of numbers) {

//         if (number === targetNumber) {
//             count++
//         }
//     }
//     return count
// }
// const totalSimilarNumber = countOccurrences(numbers, 5)
// console.log(totalSimilarNumber)



/*
----
### Task-3:
Write a function to count the number of vowels in a string.
*/
// const vowels = ["a", "e", "i", "o", "u"];
// const string = "lorem ipsum dolor, sit amet consectetur adipisicing elit. ";


// const countVowel = (string) => {
//      let count = 0;
//     for(const letter of string){
//         for(const vowel of vowels){
//             if(letter === vowel){
//             count ++
//             }
//         }
//     }
//     return count
// }
// const totalVowel = countVowel (string);
// console.log(totalVowel)
/*
---
### Task-4:
Write a function to find the longest word in a given string.
sample-input:
I am learning Programming to become a programmer
sample-output: Programming
*/

// const string = "I am learning Programming to become a programmer"
// function findLongestWord(string) {

//     const words = string.split(" ");
//     let longest = words[0];
//     for (const word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return largest;
// }
// const longestWord = findLongestWord(string);
// console.log(longestWord)


/*
----
### Task-5:
Generate a random number between 10 to 20.
*/

// function generateRandomNumber(){

//     const random = Math.floor(Math.random()*11) + 10;
//     console.log(random)
//     return random

// }
// generateRandomNumber();




// # js-problems-part2-practice-tasks
/*
### Task -6: 
Find the lowest number in the array below.
<br>
`const numbers = [167, 190, 120, 165, 137];`
*/
// const numbers = [167, 190, 120, 165, 137];
// function findLowestNumber (numbers){
//     let lowest = numbers[0];
//     for(const number of numbers){
//         if(number < lowest){
//             lowest = number;
//         }
//     } 
//     return lowest 
// }
// console.log(findLowestNumber(numbers))




/*
### Task -7: 
Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`
*/

const friendsNames = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
    let smallestName = friendsNames[0]
function findSmallestName (friendsNames){
    for (const name of friendsNames){
        if(name.length < smallestName.length ){
            smallestName = name;
        }
    }
    return smallestName
}
console.log(findSmallestName(friendsNames))




/*
### Task-8: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk
Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
*/





/*
---
### Task-9: 
You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.
**Input**
<br>
        const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];
*/





/*
### Task -10: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
```
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
```
*/