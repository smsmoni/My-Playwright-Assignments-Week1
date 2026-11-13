/*## *Assignment Details:*
Write a JavaScript program to observe how the same variable name behaves:
* in *global scope*,
* inside a *function*, and
* inside an *if-block* using both var and let.
---
## *Assignment Requirements:*
1. Declare a *global variable* named genderType with value "female".
2. Create a function named *printGender*.
3. Inside the function, declare a *function-scoped* variable color with value "brown" using let.
4. Create an *if condition* that checks whether genderType starts with "female".
5. Inside this if-block:
 * Declare a variable age = 30 using *var*.
 * Create a *block-scoped* variable color = "pink" using let.
 * Print the color inside the block and observe which value appears.
6. Outside the if-block but inside the function, print the value of age.
7. Call the function and print the value of genderType globally.
8. Now change the global variable named genderType with value “male” and observe the
functionality of scoping in JavaScript.*/

//let genderType = 'female'
let genderType = 'male';
function printGender(){
        let colour = 'brown'
        console.log('\nColour is: ' + colour);
        if(genderType.startsWith('female')){
            var age = 30
            let colour = 'pink'
            console.log('\nColour is: ' + colour);
        }
        console.log('\nAge is: ' + age);
}

printGender();
//end of Program