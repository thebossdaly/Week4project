//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//
//    Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//        Do not use numbers to reference the last element, find it programmatically.
//        ages[7] - ages[0] is not allowed!
//    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//    Use a loop to iterate through the array and calculate the average age.


//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//        Do not use numbers to reference the last element, find it programmatically.
console.log('Question 1a')
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
let lastIndex = ages.length -1
let result = ages[lastIndex] - ages[0]
console.log(result)

//    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log('Question 1b')
let newAge = 69
ages.push(newAge)
console.log(ages)

//Use a loop to iterate through the array and calculate the average age
console.log('Question 1c')
let totalAge = 0

for(i = 0; i < ages.length; i++){
    totalAge += ages[i]
}

let averageAge = totalAge / ages.length
console.log(averageAge)


//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

// 1.   Use a loop to iterate through the array and calculate the average number of letters per name.
// 2.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log('Question 2')
1.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let totalLetters = 0

for (let i = 0; i < names.length; i++){
    totalLetters += names[i].length
}

const averageLetters = totalLetters / names.length
console.log(averageLetters)

//2. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log('Question 2b')

const namesJoin = names.join(' ')
console.log(namesJoin)


//3. How do you access the last element of any array?
console.log('Question 3')
const numbers = [0, 1, 2, 3, 4, 5]

const lastNumber = numbers.length - 1
console.log(lastNumber)


//4. How do you access the first element of any array?
console.log('Question 4')

const firstNumber = numbers[0]
console.log(firstNumber)



// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
console.log('Question 5')
let nameLengths = [];

for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}

console.log(nameLengths)



//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log('Question 6')

for (let i = 0; i < nameLengths.length; i++){
    sum = nameLengths[i]
}

console.log(sum)


// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in 'hello' and 3, I would expect the function to return 'HelloHelloHello')
console.log('Question 7')

function repeat(word, n){
    if (n <= 0){
        return ''
    }
    let result = '';
    for(let i = 0; i < n; i++){
        result += word;
    }
    return result
}

let added = repeat('Hello', 6)
console.log(added)

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name seperated by spaces.
console.log('Question 8')

function getFullName(firstName, lastName){
    const fullName = firstName + ' ' + lastName;
    return fullName
}

const fullName = getFullName('Carter', 'Daly')
console.log(fullName)


// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log('Question 9')

let addedNumbers = [50, 51]

function sumOfNumbers(addedNumbers){
    const sum = addedNumbers.reduce((total, num) => total + num, 0)
    return sum > 100
}
const addedResult = sumOfNumbers(addedNumbers)
console.log(addedResult)

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('Question 10')

function theAverage(arrayOfNumbers){
    const theSum = arrayOfNumbers.reduce((total, num) => total + num, 0)
    const theRealAverage = theSum / arrayOfNumbers.length
    return theRealAverage
}

const arrayOfNumbers = [2, 4, 5, 6, 7, 10]
const theRealAverage = theAverage(arrayOfNumbers)
console.log(theRealAverage)

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first
//     array is greater than the average of the elements in the second array.
console.log('Question 11')


function compare(firstArray, secondArray){
    const firstSum = firstArray.reduce((total, num) => total + num, 0)
    const firstAverage = firstSum / firstArray.length;{
        const secondSum = secondArray.reduce((total, num) => total + num, 0)
        const secondAverage = secondSum / secondArray.length
    }
    return firstArray > secondArray
}

const firstArray = [5, 10, 15, 20]
const secondArray = [3, 6, 9, 12]
const compareResult = compare(firstArray, secondArray)
console.log(compareResult)

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number
//     moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
console.log('Question 12')

function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50
}

const isHot = true
const money = 50.98
const buyResult = willBuyDrink(isHot, money)
console.log(buyResult)

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it
console.log('Question 13')

function buyGift(groupMoney){
    let sum = 0
    for (let i = 0; i < groupMoney.length; i++){
        sum += groupMoney[i]
    }
    return sum > priceOfGift
}

const priceOfGift = 60
const groupMoney = [10.75, 20, 4.24, 35, 12]
const giftResult = buyGift(groupMoney)
console.log(giftResult)

// In this function I had a scenario of when a group of people are wanting to buy their friend a gift but weren't sure if they had enoough money.
// I created the function that would add up everyones money and if they had enough for the gift then it would return true but if they didn't then it would return false.

console.log('Quiz')

const customers = [
    {
    // Object 1: Name does not start with C, no match for city/state, not gold/platinum, not silver and under 29
    name: "Sam",
    address: {
    street: "1234 W Bell Rd",
    city: "Phoenix",
    zip: "85308",
    state: "AZ",
    },
    membershipLevel: "BRONZE",
    age: 32,
    },
    {
    // Object 2: Address field (street) is undefined, will not be added to the results array
    name: "Bob",
    address: {
    city: "Long Beach",
    zip: "9000",
    state: "CA",
    },
    membershipLevel: "GOLD",
    age: 32,
    },
    {
    // Object 4: Meets enough requirements, will be added to the results array
    name: "Christina",
    address: {
    street: "1234 Alamitos Ave",
    city: "Long Beach",
    zip: "90002",
    state: "CA",
    },
    membershipLevel: "SILVER",
    age: 21
    },
    ];

    const matchingCustomers = (custArray) => {
        let resultArray = [];

        for (let customer of custArray){
            if(
                customer.address.street === undefined ||
                customer.address.city === undefined ||
                customer.address.zip === undefined ||
                customer.address.state === undefined
            ){
                console.log('There are undefined address properties!', customer)
            } else if(
                customer.name.charAt(0) === "C" || (customer.address.city === "Peoria" && customer.address.state === "AZ") || customer.membershipLevel === ("GOLD" || "PLATINUM") || (customer.membershipLevel === "SILVER" && customer.age === 29)
            ){
                console.log("This customer first the criteria", customer);
                resultArray.pop(customer);
            }else{
                console.log('This customer does not fit the criteria!', customer)
            }
        }
    }

    matchingCustomers(customers)
