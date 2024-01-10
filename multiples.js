const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

//Register event
myEmitter.on('myEvent', (n1, n2) => {
    logInfo(n1, n2);
});

/*
* name - sumOfMultiples
* input - input {String} This string should consist of a number, a space, and a number
* output - {String} Multiples of <n1> <n2> <sum>
* description - This function accepts a string containing 2 numbers, and returns the sum
* of the multiples of those numbers less than or equal to 1000.
*/
function sumOfMultiples(input) {
    isValid = validateInput(input); 
    if(!isValid) {
        console.log('Input is invalid. Please make sure the input is a number followed by a space followed by a number.')
        return -1;
    }
    const numberArray = input.split(' ');
    const n1 = numberArray[0];
    const n2 = numberArray[1];
    findSum(n1, n2);
    myEmitter.emit('myEvent', n1, n2);
    return 0;
}

/*
* name - validateInput
* input - input {String} This string is the value being validated
* output - {Boolean} Returns true if the input is a string consisting of a number, a space, and a number.
* description - This function contains logic for validating the input to sumOfMultiples
*/
function validateInput(input) {
    if(!input) {
        return false;
    }
    let isValid = /^\d+\s\d+$/.test(input);
    return isValid;
}

/*
* name - findSum
* input - n1 {int} number1
* input - n2 {int} number2
* description - This function sums the multiples of the 2 input numbers under 100, and prints the result to the console after 2 seconds.
*/
function findSum(n1, n2) {
    let sum = 0;
    let i = 1;
    while(n1*i<=1000) {
        sum += (n1*i);
        i++;
    }
    i = 1;
    while(n2*i<=1000) {
        sum += (n2*i);
        i++;
    }
    setTimeout(() =>{
        console.log(sum);
        return 0;
    }, 2000)
}

/*
* name - logInfo
* input - n1 {int} number1
* input - n2 {int} number2
* description - This function logs the string 'Multiples of <n1> <n2>' to the console.
*/
function logInfo(n1, n2) {
    console.log(`Multiples of ${n1} ${n2}`);
    return 0;
}

module.exports = { sumOfMultiples, validateInput, findSum, logInfo }