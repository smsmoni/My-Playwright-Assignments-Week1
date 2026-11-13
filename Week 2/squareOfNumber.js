/*Assignment Details:
Create a JavaScript program that prints the square of each number from 10 to 1 using a for loop.

Assignment Requirements:
1. Declare and initialize a variable to start from 10.
2. Use a for loop to iterate from 10 down to 1.
3. Calculate the square of each number inside the loop.
4. Print the square of each number in reverse order.
5. Do not use arrays or built-in functions to calculate the squares.*/

let i=10;
let n=1;
for(i; i>=1; i--){
    n= i*i;
    console.log('Square of ' + i + ' is: ' + n);
}
//end of Program
