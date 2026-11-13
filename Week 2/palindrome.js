/*Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results.
Assignment Requirements:
Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false.*/


function reverseString(str) {
    let reversedStr = "";   
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log('Reversed String: ' + reversedStr);
  return reversedStr;
}

function isPalindrome(str1) {
    console.log('\nYour String: ' + str1);
    if(str1 === reverseString(str1)){
        console.log(str1 + ' is palindrome');
    }
    else{
        console.log(str1 + ' is not palindrome');

    }
   
}


isPalindrome("Malayalam"); 
isPalindrome("English"); 
isPalindrome("malayalam");

//end of Program