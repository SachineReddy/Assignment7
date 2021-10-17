//STEP 1
var number;
function halfNumber(num) {
    "use strict";

    if (isNaN(num)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = num / 2;
        window.console.log("Half of " + String(num) + " is " + String(result) + ".");
        return result;
    }
}

number = parseFloat(window.prompt("Enter a number to be halved:"));
halfNumber(number);


//STEP 2
function squareNumber(num) {
    "use strict";

    if (isNaN(num)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = num * num;
        window.console.log("The result of squaring the number " + String(num) + " is " + String(result) + ".");
        return result;
    }
}

number = parseFloat(window.prompt("Enter a number to be squared:"));
squareNumber(number);


//STEP 3
var firstNumber;
var secondNumber;
function percentOf(x, y) {
    "use strict";

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = Math.round(x / y * 100);
        window.console.log(String(x) + " is " + String(result) + "% of " + String(y) + ".");
        return result;
    }
}

firstNumber = parseFloat(window.prompt("Percent the first number with respect to second. \nEnter first number:"));
secondNumber = parseFloat(window.prompt("Enter second number:"));
percentOf(firstNumber, secondNumber);

//STEP 4
function findModulus(x, y) {
    "use strict";

    if (isNaN(x) && isNaN(y)) {
        const errorMessage = "Invalid argument. Need a number argument.";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = x % y;
        window.console.log(String(result) + " is the modulus of " + String(x) + " and " + String(y) + ".");
        return result;
    }
}

firstNumber = parseFloat(window.prompt("Modulus of the two numbers. \nEnter first number:"));
secondNumber = parseFloat(window.prompt("Enter second number:"));
findModulus(firstNumber, secondNumber);

// 5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

//STEP 5
function sumNumbers() {
    "use strict";
    var sum = 0;
    var numberCollection = window.prompt("Enter numbers delimited by commas");
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }

    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));

    return sum;
}

sumNumbers();