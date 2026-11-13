/*Assignment Details:
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
Assignment Requirements:
Example:1
1. Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word.
Example:2
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length
Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result*/

let str1 = "Hello World";
let arr1 = str1.split(" ");
console.log(arr1);
console.log('The last word in the String is: ' + arr1[arr1.length-1]);
console.log('The length of the last word in the String is: ' + (arr1[arr1.length-1]).length);
console.log('-------------------------------------');

let str2 = " fly me to the moon ";
str2 = str2.trim();
console.log('New String after removing the leading and trailing spaces: ' + str2);
let arr2 = str2.split(" ");
console.log(arr2);
console.log('The last word in the String is: ' + arr2[arr2.length-1]);
console.log('The length of the last word in the String is: ' + (arr2[arr2.length-1]).length);
console.log('-------------------------------------');

function areAnagrams(str3, str4) {
    str3 = str3.replace(/\s+/g, '').toLowerCase();
    str4 = str4.replace(/\s+/g, '').toLowerCase();
    
        let sortedStr3 = str3.split('').sort().join('');
        let sortedStr4 = str4.split('').sort().join('');
        if(sortedStr3 === sortedStr4){
            console.log(str3 + ' and ' + str4 + ' are Anagrams');
        }
        else{
            console.log(str3 + ' and ' + str4 + ' are not Anagrams');
        }

    
}
areAnagrams("listen", "silent");
areAnagrams("hello", "world"); 

//end of Program