/* =====================================================
    Load Post from Fetch API
=========================================================*/
function loadPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    let divCard = document.getElementById('cardPost');
    for (const post of posts) {
        let mydiv = document.createElement('div');
        mydiv.classList.add('box');
        mydiv.innerHTML = `
        <div class="front-face">
            <div class="icon"><i class="fa-solid fa-address-card"></i></div>
            <span>${post.title.length > 8 ? post.title.slice(0, 8) : post.title}</span>
        </div>
        <div class="back-face">
            <span>${post.title.length > 10 ? post.title.slice(0, 10) : post.title}</span>
            <p>${post.body.length > 100 ? post.body.slice(0, 100) + '.........' : post.body}</p>
            <a href="#">Read More </a>
        </div>
        `
        divCard.appendChild(mydiv)
    }
}

loadPosts()


