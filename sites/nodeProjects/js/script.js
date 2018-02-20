'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {
// below is for design only, FIXME remove!!!
  $(document).ready(function() {
    $("#LS").click(function(){
  $('#ratio').toggle();
  });

  $("#P").click(function(){
  $('#ratioRotated').toggle();
  });
// ----------------------------------------->
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//<*******************Whiteboard******************************>
// 1. declare a GLOBAL variable to store the vowelIndex
//
// 2. create function isInputValid() that makes sure that the input does not have any spaces between letters or any numbers
// IF the word contains no spaces or numbers (this is done using regEx search() for spaces and numbers)
//r-eturn true
// ELSE
// -Throw an error that the input is invalid
// 3. function findFirstVowel() searches the string for the index of the first vowel using regEx search() and assigns it to vowelIndex
// 4. function pigLatin():
//-force input to lower case and remove whitespaces
//-call findFirstVowel() to get first vowel index
// -if/else statement to determine if the first letter is a vowel:
// IF the first letter in vowelIndex is a vowel (use regEx search(). if it's 0...
// THEN
// -return the full string plus ‘yay”)
// ELSE
// -Once you have the index of the first vowel (other than index 0), create a new variable newWord and assign the subString() of the original string to it
// -return the newWord variable plus the original string starting at the index position of the vowel (from the variable vowelIndex) plus “ay”
// ELSE
// -return error that the word has no vowels
//<****************************Begin code*********************************>


const isInputValid=(word)=> {
  if (word.search(/\s/g) === -1 && word.search(/\d+/g) === -1) {//check there are no white spaces between letters on numbers in string
    return true
  }
}

const pigLatin=(word)=> {
  word = word.toLowerCase().trim();//force input to lowercase
  if (isInputValid(word) !== true){
    return 'Invalid input! Only use a single word with no spaces.'
  }else{
    // findFirstVowel(word);
    const vowelIndex = word.search(/[aeiou]/)//store index postion of first vowel
    if (vowelIndex === 0) {// check if first letter is a vowel
      return `${word}yay`;//if so, just return the full word + yay
    }else{//else move and analyze where the first vowel is
      if (vowelIndex !== -1) {//make sure it actually finds a vowel
        let newWord = word.substring(vowelIndex);//if so, create new variable that is the original string from the first vowel to the end
        return `${newWord + word.substring(0, vowelIndex)}ay`//return the new word, plus the first removed letter(s) plus ay
      }else{
        return "There are no vowels in this word. Do you even English bro?"//unless there are no vowels in the word
      }
    }
  }
}


 $('.testClick').click(function (){
   prompt('Enter Row');
   // console.log('HELOOOOOOOOOo');
});
pigLatin();

// const getPrompt=()=> {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );//changed this to call input function
//     getPrompt();
//   });
// }


  });//close document.ready

}//close window.onload
// });
