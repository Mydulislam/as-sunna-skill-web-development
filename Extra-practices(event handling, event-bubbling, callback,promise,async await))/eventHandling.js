/* =====================================
        Click Event Example:
========================================*/
const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });


  /* ===========================================
            Mouseover and Mouseout Events:
  ==============================================*/
  const div = document.getElementById("myDiv");
  div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "lightcoral";
  });
  div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "lightblue";
  });



  /* ===========================================
            Keyboard Events::
  ==============================================*/
  
  const input = document.getElementById("myInput");
  input.addEventListener("keydown", function(event) {
      console.log("Key pressed:", event.key);
    });
    



/* ===========================================
              Form Submission:
==============================================*/
const form = document.getElementById("myForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    const name = event.target.elements.name.value;
    alert(`Hello, ${name}!`);
  });




/* ===========================================
              Window Resize Event:
==============================================*/
window.addEventListener("resize", function() {
    console.log("Window resized!");
  });










/* ===========================================
              Custom Events:
==============================================*/
const button1 = document.getElementById("myButton1");
  button1.addEventListener("customClick", function() {
    alert("Custom click event fired!");
  });
  button1.addEventListener("click", function() {
    const customEvent = new Event("customClick");
    button1.dispatchEvent(customEvent);
  });










/* ===========================================
              Event Object Properties:
==============================================*/

document.getElementById("myElement").addEventListener("click", function (event) {
    console.log("Event type: " + event.type);
    console.log("Event target: " + event.target);
    console.log("Mouse X position: " + event.clientX);
  });
  











/* ===========================================
              Form Submission:
==============================================*/


