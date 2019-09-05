// const headerOne = document.querySelector('h1');

// // console.log(headerOne);
// // console.log(headerOne.textContent);

// // let message = headerOne.innerHTML = 'Sup, Sup';

// const container = document.querySelector('.container');

// function globalListItems(){
//     // need ul or ol, any classes or attributes or ids needed

// // create ul
// const ul = document.createElement('ul');
// const li = document.createElement('li');

// //attributes/classes/ids
// li.className = ["list-group-item list-group-item-info"];
// // li.innerHTML = 'I am a list item';
// li.innerText = 'I am inner Text';
// li.id = 'myListId';

// // append to container>ul>li
// ul.appendChild(li);
// container.appendChild(ul);

// const image = document.createElement('img');
// image.setAttribute('alt', 'this is an image');
// console.log(image);

// }


// globalListItems();

const container_new = document.querySelector('.container_new');

function createNewCard(){
    const divCard = document.createElement('div');
    divCard.className = "card col-md-6 text-center";

    const divColMd4 = document.createElement('div');
    divColMd4.className = "col-md-4";

    const paragraph = document.createElement('p');
    paragraph.innerText = 'sample paragraph. blah blah blah';
    
    const img = document.createElement('img');
    img.setAttribute('src', 'img/photo-1562101660-c49dd4bc0083.jpeg');
    img.setAttribute('class', 'img-responsive');

    const h1 = document.createElement('h1');
    h1.innerText = 'Cample Card';

    const icon = document.createElement('i');
    icon.setAttribute('class', 'fab fa-facebook-f');

    const alink = document.createElement('a');
    alink.setAttribute('href', 'facebook.com')
    alink.appendChild(icon);

    divColMd4.appendChild(h1);
    divColMd4.appendChild(img);
    divColMd4.appendChild(paragraph);
    divColMd4.appendChild(alink);
    divCard.appendChild(divColMd4);
    container_new.appendChild(divCard);

    console.log(container_new);


}
createNewCard();
