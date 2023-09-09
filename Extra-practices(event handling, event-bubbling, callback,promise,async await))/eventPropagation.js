/*=================================================================== 
                    Capturing Phase:
=====================================================================*/

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

outer.addEventListener('click', () => {
    console.log('Capturing: Outer Div');
}, true);

middle.addEventListener('click', () => {
    console.log('Capturing: Middle Div');
}, true);

inner.addEventListener('click', () => {
    console.log('Capturing: Inner Div');
}, true);




/*=================================================================== 
                    Bubbling Phase:
=====================================================================*/

const outer1 = document.getElementById('outer1');
const middle1 = document.getElementById('middle1');
const inner1 = document.getElementById('inner1');

outer1.addEventListener('click', () => {
  console.log('Bubbling: Outer Div');
});

middle1.addEventListener('click', () => {
  console.log('Bubbling: Middle Div');
});

inner1.addEventListener('click', () => {
  console.log('Bubbling: Inner Div');
});





/*=================================================================== 
                Stopping Propagation:
=====================================================================*/

const button = document.getElementById('stopPropagationBtn');

button.addEventListener('click', (event) => {
  console.log('Button clicked');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  console.log('Document clicked');
});


/*=================================================================== 

=====================================================================*/
/*=================================================================== 

=====================================================================*/
/*=================================================================== 

=====================================================================*/
/*=================================================================== 

=====================================================================*/
/*=================================================================== 

=====================================================================*/
/*=================================================================== 

=====================================================================*/