/*Assignment Details:
Write JavaScript programs using different array methods instead of loops.
Assignment Requirements:
1 Use push() to add elements into an array
2 Use pop() to remove the last element
3 Use shift() to remove the first element
4 Use unshift() to add an element at the beginning
5 Use includes() to check whether an element exists
6 Use indexOf() to find the position of an element
7 Use join() to convert array into string
8 Use reverse() to reverse the array
9 Use sort() to sort the array*/

//1. Use push() to add elements into an array
let cars = ["Maruti", "Hyundai", "Toyota", "Mahindra"];
console.log('Array elements:', cars);

cars.push("Tata")
console.log('Array elements after push:', cars);

//2. Use pop() to remove the last element
cars.pop();
console.log('Array elements after pop:', cars);

//3. Use shift() to remove the first element
cars.shift();
console.log('Array elements after shift:', cars);

//4. Use unshift() to add an element at the beginning
cars.unshift('Renault');
console.log('Array elements after unshift:', cars);

//5. Use includes() to check whether an element exists
console.log('Whether array contains Hyundai?', cars.includes('Hyundai'));

//6. Use indexOf() to find the position of an element
console.log('Index value of Mahindra: ', cars.indexOf('Mahindra'));


//7. Use join() to convert array into string
let text = cars.join('---');
console.log('Joined string: ' + text);
//end of Program

//8. Use reverse() to reverse the array
cars.reverse();
console.log('Reversed Array:', cars);

//9. Use sort() to sort the array
cars.sort();
console.log('Sorted Array:', cars);

//10. Use slice() method to return selected elements without changing original array
let numbers = [10, 20, 30, 40, 50];
console.log('The Numbers you selected are: ' + numbers.slice(1,4));

//11. Use splice() method to Add or remove elements from array
let numbers1 = [10, 20, 30, 40, 50];
numbers1.splice(3,1,60,70);
console.log(numbers1);


//end of Program