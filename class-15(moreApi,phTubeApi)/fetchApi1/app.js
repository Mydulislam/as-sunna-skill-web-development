let navButton = () => {
    let url = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayNavButton(data.data))
}

let displayNavButton = (links) => {
    let navbarButtonSelect = document.getElementById('navbar-button');
    idErOdhineContent(1000)
    links.forEach(link => {
        let createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <button onclick="idErOdhineContent(${link.category_id})">${link.category}</button>
       `;
        navbarButtonSelect.appendChild(createDiv)
    });
}

let idErOdhineContent = (id) => {
    let buttonDiv = document.getElementById('sort-by');
    buttonDiv.innerHTML = `
        <button title=${id} onclick="sortByFunc(${id})">Sort By View</button>
    `;
    let url = `https://openapi.programming-hero.com/api/videos/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(id => displayCard(id.data,false))
}



let sortByFunc = (id)=>{
    let url = `https://openapi.programming-hero.com/api/videos/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(id => displayCard(id.data,true))
}


let displayCard = (items,isSort) => {
    console.log(items);
    if(isSort){
        items.sort((a, b) => {
            const numericA = parseFloat(a.others.views);
            const numericB = parseFloat(b.others.views);
    
            // Compare the numeric values in descending order
            return numericB - numericA;
        });
    }
    let boxContainerSelect = document.getElementById('box-container');
    boxContainerSelect.textContent = '';
    items.forEach(item => {
        let boxCreate = document.createElement('div');
        boxCreate.classList.add('box');
        boxCreate.innerHTML = `
        <img class="box-image" src="${item.thumbnail}" alt="">
        <div class="box-content">
            <div class="author">
                <img src="${item.authors[0].profile_picture}" alt="">
            </div>
            <div class="author-content">
            <h4>${item.title}</h4>
            <p>${item.authors[0].profile_name}</p>
            <p>${item.others.views}</p>
            </div>
        </div>
        `
        boxContainerSelect.appendChild(boxCreate)
    })
}
navButton()