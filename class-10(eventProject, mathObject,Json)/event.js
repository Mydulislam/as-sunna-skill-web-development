/*======================================================
    Javascript Events. There are various kind of Event
    1) Onclick
    2) Onchange
    3) Onblur
    4) OnmouseOver
    5) OnmouseOut
    6) OnkeyDown
    7) Onload
    8) onfocus
    9) Keypress Listener
=========================================================*/


/*=======================================================
        Onclick Event
=========================================================*/
function clickEvent(){
    let resultDate = document.getElementById('date1');
    let date = new Date();
    resultDate.innerHTML = date;
}

/*=======================================================
        Onchange Event
=========================================================*/
function selectMenu(){
    let subjectLists = document.getElementById('item1').value;
    document.getElementById('selectedItem').innerHTML = `You Selectd Item is :<b>${subjectLists}</b>`;
}

/*=======================================================
        Onblur Event
=========================================================*/
function valueUpperCase(){
   let inputValueSelect =  document.getElementById('inputValue');
   inputValueSelect.value = inputValueSelect.value.toUpperCase();
}

/*=======================================================
        Onfocus Event
=========================================================*/
function inputFocus() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Input field has gained focus!";
  }

  // Example: 2
  function changeBackgroundColor(inputElement) {
    inputElement.style.backgroundColor = "#efe0e0"; // Change background color when focused
  }
  
  // Reset background color when the input loses focus
  const inputElements = document.querySelectorAll("input");
  inputElements.forEach(input => {
    input.addEventListener("blur", function() {
      input.style.backgroundColor = "";
    });
  });


/*=======================================================
        OnMouseOver and OnMouseOut Event
=========================================================*/
function highlightBox(boxElement) {
    boxElement.style.backgroundColor = "orange";
}

function unhighlightBox(boxElement) {
    boxElement.style.backgroundColor = "lightblue";
}


/*=======================================================
        OnkeyDown Event
=========================================================*/
function handleKeyDown(event) {
    const key = event.key;
    const messageElement = document.getElementById("onkeyessage");
    messageElement.textContent = "Key pressed: " + key;
}


/*=======================================================
        Onload Event
=========================================================*/
const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
    },
    {
      text: "Stay hungry, stay foolish.",
      author: "Steve Jobs"
    }
  ];
  function loadRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    
    quoteElement.textContent = quotes[randomIndex].text;
    authorElement.textContent = "- " + quotes[randomIndex].author;
  }

/*=======================================================
        KeyPressEvent Event
=========================================================*/

const textInput = document.getElementById("textInput1");
const messageElement = document.getElementById("keyPressMessage");

textInput.addEventListener("keypress", function(event) {
  const pressedKey = event.key;
  messageElement.textContent = "Key pressed: " + pressedKey;
});