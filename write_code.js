// Step 2: Write Code
// Work through the following problems in Javascript (you have seen these problems before). 
// Create a new file for your code. When you have finished with each function, leave a code 
// comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return 
// True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (arr) => {
    for(i=0; i<arr.length; i++) {
        for(j=i+1; j<arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

// time:O(n^2)
// space:O(n^2)

// For example:
// console.log(addToZero([2,-2]))

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return 
// True if that word contains only unique characters. Return False otherwise.

// For example:

const hasUniqueChars = (str) => {
    let arr = str.split('')
    for(i=0; i<arr.length; i++) {
        for(j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                return false;
            } else {
                return true;
            }
        }
    }
}


// time:O(n^2)
// space:O(n^2)


// console.log(hasUniqueChars('moonday'))

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English 
// alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = str.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }
 
// time: 0(1)
// space: 0(n)


// console.log(isPangram("The uick brown fox jumps over the lazy dog!"));
// // -> True

// isPangram("I like cats, but not mice");
// // -> False
// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and 
// returns the length of the longest one.

// For example:

const findLongestWord = (arr) => {
    lengthArr = []
    for(i=0; i<arr.length;i++) {
        lengthArr.push(arr[i].length)
    }
    // console.log(lengthArr)
    console.log(Math.max(...lengthArr))
}

// time: 0(1)
// space: 0(n)

findLongestWord(["hi", "hello"]);
// // -> 5