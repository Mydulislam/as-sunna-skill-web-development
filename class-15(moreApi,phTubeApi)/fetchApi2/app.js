var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


function loadPosts() {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(res => res.json())
    .then(posts => diplsyPosts(posts))
}

function diplsyPosts(posts) {
  let container = document.getElementById('container');

  posts.forEach((post, i) => {
    let createDiv = document.createElement('div');
    createDiv.classList.add('card')
    createDiv.innerHTML = `
        <div>
        <h1>Title: ${post.title.length > 10 ? post.title.slice(0, 10) : post.title}</h1>
        <p><b>Post: </b> ${post.body}</p>
        <button id="myBtn" title=${post.id} onclick="postComments(${post.id})">Show Post Comment</button>
      </div>
        `
    container.appendChild(createDiv)
  });
}



function postComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(comments => showPostComments(comments, postId))
}


function showPostComments(comments, id) {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = `
            <span onclick="spanCloseClik()" class="close">&times;</span>
            <p><b>This Post: </b> ${data.body}</p>
            <h2>Comments:</h2>
    ` ;
      comments.forEach((comment, i) => {
        let content = document.createElement('p');
        content.innerHTML = `${i + 1}) ${comment.name} `;
        modalContent.appendChild(content)
      })
      modal.style.display = "block";
    })

}

// When the user clicks on <span> (x), close the modal
function spanCloseClik() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


loadPosts()