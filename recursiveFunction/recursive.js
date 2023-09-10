/*=============================================== 
                Factorial Calculation:
==================================================*/
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const result = factorial(5); // 5! = 120
  console.log('Factorial of 5:', result);
  





/*=============================================== 
            Fibonacci Sequence:
==================================================*/

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const result2 = fibonacci(6); // 0, 1, 1, 2, 3, 5, 8...
  console.log('Fibonacci(6):', result2);
  





/*=============================================== 
                Countdown:
==================================================*/

function countdown(n) {
    if (n <= 0) {
      return;
    }
    console.log(n);
    countdown(n - 1);
  }
  
  countdown(5); // Prints 5, 4, 3, 2, 1
  






/*=============================================== 
            Binary Search:
==================================================*/
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1; // Element not found
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid; // Element found
    }
    if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1); // Search left half
    } else {
      return binarySearch(arr, target, mid + 1, end); // Search right half
    }
  }
  
  const arr = [1, 3, 5, 7, 9, 11, 13];
  const target = 7;
  const index = binarySearch(arr, target);
  console.log(`Index of ${target}:`, index);
  






/*=============================================== 
            Recursive Tree Traversal:
==================================================*/

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function inOrderTraversal(node) {
    if (node === null) {
      return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  inOrderTraversal(root);
  





/*=============================================== 

==================================================*/






/*=============================================== 

==================================================*/







/*=============================================== 

==================================================*/