const multiples = require('./multiples.js');
/*
* name - manualEntry
* description - This function allows for keyboard input to the sumOfMultiples function
*/
function manualEntry() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Please enter 2 numbers seperated by a space\n', input => {
        multiples.sumOfMultiples(input);
        readline.close();
        return 0;
    })
}
manualEntry()