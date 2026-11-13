/*Assignment Details:
Write a JavaScript program to find the total sum of all numbers present in an array.
Assignment Requirements:
1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final sum*/

let numArr = [10,20,30,40,50];
let sumArr = 0;
for(let i=0;i<numArr.length;i++)
{
    sumArr += numArr[i];
}

console.log('The sum of all the elements in the array: ' + sumArr);

//end of Program