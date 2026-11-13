/*Assignment Details:
Declare variables using `let` for different data types in JavaScript, and verify their types using `typeof`,
including an uninitialized variable.

Assignment Requirements:
userName // String
organization // String
contactNumber // Number
knowsAutomation // Boolean
usesPlaywright // Undefined (not assigned)*/

let userName = 'Sandeep';
let orgnaization = 'Testleaf';
let contactNumber = 9962298490;
let knowsAutomation = true;
let usesPlaywright;

console.log('\n' + 'User Name: ' + userName);
console.log('Data Type of userName: ' + typeof userName + '\n');

console.log('Organization: ' + orgnaization);
console.log('Data Type of orgnaization: ' + typeof orgnaization + '\n');

console.log('Contact Number: ' + contactNumber);
console.log('Data Type of contactNumber: ' + typeof contactNumber + '\n');

console.log('Knows Automation?: ' + knowsAutomation);
console.log('Data Type of knowsAutomation: ' + typeof knowsAutomation + '\n');

console.log('Uses Playwright?: ' + usesPlaywright);
console.log('usesPlaywright: ' + typeof usesPlaywright + '\n');


//end of Program
