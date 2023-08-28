/*============================================================================================== 
        String Methods:-
            1. indexOf(), 
            2. lastIndexOf(),  
            3. search()
            4. slice()
            5. subString()
            6. subStr()
            7. replace()
            8. toUpperCase()
            9. toLowerCase()
            10. concat()
            11. trim()
            12. padStart()
            13. padEnd()
            14. charAt()
            15. charCodeAt()
            16. split()
================================================================================================*/

/*===================================================
    1) indexOf() Method
=====================================================*/
// Example: 1
let indexOf1 = "please help me and help him";
let indexOfResult = indexOf1.indexOf('help');      // Output: 7
let indexOfOneCharacter = indexOf1.indexOf('p');   // Ouptput : 0
console.log(indexOfResult, indexOfOneCharacter);


// Example: 2
let indexOf2 = "Sure, I willl help you and help him";
let indexAfterNum = indexOf2.indexOf("help", 17); // Output: 27
console.log(indexAfterNum);


//   Email Checker using indexOf() method
function emailChecker() {
    let emailText = document.getElementById('emailText');
    let theText = emailText.value;
    let targetEmail = "@";
    let getIndex = theText.indexOf(targetEmail);
    let resultEmail = document.getElementById("email");
    if (getIndex !== -1) {
        resultEmail.innerHTML = "Valid email format";
        emailText.value = ""
    }
    else {
        resultEmail.innerHTML = "Please enter valid email";
        emailText.value = ""
    }
}

/*===================================================
    2) lastIndexOf() Method
=====================================================*/
// Example : 1
let stringText2 = "Please help him and help me";
let lastTextSearch = stringText2.lastIndexOf('help');
console.log(lastTextSearch);


// Example : 2 Basic Usage
const sentence = "The quick brown fox jumps over the lazy dog. The fox is quick.";
const searchTerm = "fox";
const index = sentence.lastIndexOf(searchTerm);

if (index !== -1) {
    console.log(`"${searchTerm}" last found at index ${index}`); // Result: 49
} else {
    console.log(`"${searchTerm}" not found`);
}



// Example: 3 Finding the Last Occurrence of a Character
const text = "Hello, how are you?";
const char = "o";
const lastIndex = text.lastIndexOf(char);

if (lastIndex !== -1) {
    console.log(`Last occurrence of "${char}" found at index ${lastIndex}`); // Result: 16
} else {
    console.log(`"${char}" not found`);
}




// Example: 4 Searching Backwards for a Substring:
const sentence2 = "She sells seashells by the seashore, the shells she sells are surely seashells";
const searchTerm2 = "seashells";
const lastIndex2 = sentence2.lastIndexOf(searchTerm2);
console.log(lastIndex2);
if (lastIndex !== -1) {
    console.log(`"${searchTerm2}" last found at index ${lastIndex2}`);
} else {
    console.log(`"${searchTerm2}" not found`);
}

/*===================================================
    3) search() Method
=====================================================*/
// Example : 1
let searcText = "Please help me and help him";
let searchNum = searcText.search("me");
console.log(searchNum);


// Example : 2 Using Regular Expression
const searchText2 = "Hello, how are you? How's the weather today?";
const regex = /how/i; // Case-insensitive regular expression
const searchIndex = searchText2.search(regex);

if (searchIndex !== -1) {
    console.log(`"${regex}" found at index ${searchIndex}`);
} else {
    console.log(`"${regex}" not found`);
}



// Example : 3 Searching for a Word Using Regular Expression
const searchText3 = "The cat and the hat.";
const searchItem = /\bcat\b/;
const searchIndex2 = searchText3.search(searchItem);

if (index !== -1) {
    console.log(`"${searchItem}" found at index ${searchIndex2}`);
} else {
    console.log(`"${searchItem}" not found`);
}


// Example : 4 Using a Variable for Search Term
const searchText4 = "JavaScript is a powerful scripting language.";
const searchItem2 = "scripting";
const searchIndex3 = searchText4.search(searchItem2);

if (index !== -1) {
    console.log(`"${searchItem2}" found at index ${searchIndex3}`);
} else {
    console.log(`"${searchItem2}" not found`);
}

// Simple project using html, css, js
const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const searchResult = document.getElementById("searchResult");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const items = itemList.getElementsByTagName("li");

    let found = false;
    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        const index = itemText.search(searchTerm);
        if (index !== -1) {
            items[i].style.display = "block";
            found = true;
        } else {
            items[i].style.display = "none";
        }
    }

    if (found) {
        searchResult.textContent = `Found items matching "${searchTerm}"`;
    } else {
        searchResult.textContent = `No items found for "${searchTerm}"`;
    }
});

/*===================================================
   4) slice() Method
=====================================================*/
// Example : 1  Basic usage
const sliceSentence = "The quick brown fox jumps over the lazy dog.";
const slicedPortion = sliceSentence.slice(4, 15);

console.log(slicedPortion); // Output: "quick brown"



// Example : 2 Using Negative Indices (Counting from the End):
const sliceText = "Hello, how are you?";
const slicedText = sliceText.slice(-4);

console.log(slicedText); // Output: "you?"




// Example : 3 Omitting the Ending Index
const word = "JavaScript";
const slicedWord = word.slice(4);

console.log(slicedWord); // Output: "Script"


// Example : 4 Using Slice for Substring Replacement
let sliceSentence2 = "I like apples and oranges.";
const fruit = sliceSentence2.slice(7, 13);
const newSentence = sliceSentence2.replace(fruit, "bananas");

console.log(newSentence); // Output: "I like bananas and oranges."



/****************************slice() methode simple project**************************** */

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const showSliceText = document.getElementById('showSliceText')
textInput.addEventListener("input", function() {
  const inputText = textInput.value;
  const charLength = inputText.length;

  charCount.textContent = `${charLength} characters`;

  // Display a sliced portion of the input text (first 50 characters)
  const slicedText = inputText.slice(0, 50);
  showSliceText.innerHTML = slicedText;
});




/*=======================================================================
    5. subString() 6. subStr() somewhat the same কিছুটা slice() এর মতো
=========================================================================*/


/*=======================================================================
    7. replace()
=========================================================================*/

// Example: 1 Basic Example
const replaceSentence = "I like apples and apples are tasty.";
const replacedSentence = sentence.replace("apples", "oranges");

console.log(replacedSentence); // Output: "I like oranges and oranges are tasty."



// Example: 2 Replacing All Occurrences
const replaceText = "It's raining, raining, and raining again.";
const newReplaceText = text.replace(/raining/g, "pouring");

console.log(newReplaceText); // Output: "It's pouring, pouring, and pouring again."



// Example: 3 Using a Regular Expression:
const regularSentence = "The quick brown fox jumps over the lazy dog.";
const regularSearchTerm = /FOX/i; // Case-insensitive regular expression
const regularReplaced = sentence.replace(regularSearchTerm, "cat");

console.log(regularReplaced); // Output: "The quick brown cat jumps over the lazy dog."


//Example: 4 Replacing with a Function:
const sentenced = "Hello, world!";
const newSentenced = sentenced.replace("world", function(match) {
  return match.toUpperCase();
});

console.log(newSentenced); // Output: "Hello, WORLD!"



// Example: 5 Replacing with Capture Groups
const date = "2023-08-19";
const newDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");

console.log(newDate); // Output: "08/19/2023"

// Example: 6
const mydul = "Hello, world";
const replacedMydul = mydul.replace('world', function(match){
    console.log(match); // world
})


/* ********************simple string replace() method project***************************************** */
const replaceButton = document.getElementById('replaceButton');
const replaceTextInput = document.getElementById('textInputReplace');
const replaceSearchInput = document.getElementById('searchInputReplace');
const replaceInput = document.getElementById('replaceInput');
const resultDiv = document.getElementById('resultReplace');

replaceButton.addEventListener('click', () => {
  const originalText = replaceTextInput.value;
  const searchTerm = replaceSearchInput.value;
  const replacement = replaceInput.value;

  const updatedText = originalText.replace(new RegExp(searchTerm, 'gi'), replacement);

  resultDiv.textContent = updatedText;
});


/*=======================================================================
    8. toUpperCase()
=========================================================================*/
// Example: 1 Basic Example
const originalText = "Hello, World!";
const uppercaseText = originalText.toUpperCase();

console.log(uppercaseText); // Output: "HELLO, WORLD!"




// Example: 2 Using function to even single character toUpperCase()
function weirdUppercase(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        result += text[i].toUpperCase();
      } else {
        result += text[i];
      }
    }
    return result;
  }
  
  const originalTextTOupperCase = "hello, world!";
  const trickyUppercase = weirdUppercase(originalTextTOupperCase);
  
  console.log(trickyUppercase); // Output: "HeLlO, WoRlD!"
  



  // Example: 3 using function to even word uppercase
  function emphasizeText(text) {
    const words = text.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (i % 2 === 0) {
        words[i] = words[i].toUpperCase();
      }
    }
  
    return words.join(' ');
  }
  
  const originalWord = "this is a tricky example to demonstrate string method toUpperCase()";
  const emphasizedText = emphasizeText(originalWord);
  
  console.log(emphasizedText);
  

  /*=======================================================================
    9. toLowerCase()
=========================================================================*/

let orginalTexted = "BANGLADESH OUR COUNTRY";
let convertLowerCase = orginalTexted.toLowerCase();
console.log(convertLowerCase);







/*=======================================================================
    10. concat()
=========================================================================*/
let concateText1 = "Bangladesh ";
let conCateText2 = "Our ";
let conCateText3 = "Country";
let fullTextWithConcate = concateText1 + conCateText2 + conCateText3;
console.log(fullTextWithConcate); // Bangladesh Our Country

//Another way
let anotherConcateWay = concateText1.concat(conCateText2,conCateText3);
console.log(anotherConcateWay);


/* ****************Simple project using Concat() method********************* */
const generateButton = document.getElementById('generateButton');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const resultDivConcat = document.getElementById('resultConcate');

generateButton.addEventListener('click', () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  const fullName = firstName.concat(' ', lastName);
  resultDivConcat.textContent = `Full Name: ${fullName}`;
});





/*=======================================================================
    11. trim()
=========================================================================*/
const trimText = "                mydul                    islam";
console.log(trimText); 
const trimConvert = trimText.trim();
console.log(trimConvert);



/* ****************Simple project using trim() method********************* */
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const resultDivTrim = document.getElementById('resultPass');

loginButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (username === '' || password === '') {
    resultDivTrim.textContent = 'Please enter both username and password.';
  } else {
    resultDivTrim.textContent = `Welcome, ${username}!`;
  }
});



/*=======================================================================
    12. split()
=========================================================================*/
const splitSentence = "This is a sample sentence for splitting.";
const words1 = sentence.split(' ');

console.log(words1); // [  "This",  "is",  "a",  "sample",  "sentence",  "for",  "splitting."]

const words2 = sentence.split(',');
console.log(words2);  // ['The quick brown fox jumps over the lazy dog. The fox is quick.']

const words3 = sentence.split('|');
console.log(words3); // ['The quick brown fox jumps over the lazy dog. The fox is quick.']

const words4 = sentence.split('');
console.log(words4); // ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.', ' ', 'T', 'h', 'e', ' ', 'f', 'o', 'x', ' ', 'i', 's', ' ', 'q', 'u', 'i', 'c', 'k', '.']

