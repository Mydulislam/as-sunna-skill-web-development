/* ===========================================
              Click Event Bubbling:
==============================================*/
document.getElementById("outerDiv").addEventListener("click", function () {
    alert("Outer Div Clicked!");
  });

  document.getElementById("middleDiv").addEventListener("click", function () {
    alert("Middle Div Clicked!");
  });

  document.getElementById("innerDiv").addEventListener("click", function () {
    alert("Inner Div Clicked!");
  });






/* ===========================================
              Button Click Event Bubbling:
==============================================*/


document.getElementById("buttonContainer").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      alert(event.target.textContent + " Clicked!");
    }
  });










/* ===========================================
              Form Submission:
==============================================*/

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Form Submitted!");
});






/* ===========================================
              Delegating Click Events:
==============================================*/

const itemList = document.getElementById("itemList");

itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert(`Clicked on ${event.target.textContent}`);
  }
});