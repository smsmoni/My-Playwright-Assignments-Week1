/*Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.

Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result
*/

let n;
function isOddOrEven(n){
    if(n%2 ==0)
        return "Even"
    else
        return "Odd"
}

console.log('22 is an ' + isOddOrEven(22) + ' number');
console.log('33 is an ' + isOddOrEven(33) + ' number');
console.log('0 is an ' + isOddOrEven(0) + ' number');

//end of Program


