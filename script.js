
const arrayImages = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const container = document.querySelector (".container");
console.log (container);
const thumbnailContainer = document.querySelector (".thumbnail-container");

let currentSlideIndex = 0;
console.log (currentSlideIndex);

for (let i = 0; i < arrayImages.length; i++) {
    console.log (arrayImages[i]);

    container.innerHTML +=
        `<div class= "item">
            <div class= "img-container">
                <img src="${arrayImages[i]['url']}" alt="">
            </div>
            <div class= "description-container">
                <h2>
                    ${arrayImages[i]['title']}
                </h2>
                <p>
                    ${arrayImages[i]['description']}
                </p>
            </div>
        </div>
        `;

    thumbnailContainer.innerHTML += `
    <div class="thumbnail-active">
        <img src="${arrayImages[i]['url']}" alt="">
    </div>
    `;

    console.log(container);
    console.log(thumbnailContainer);

};

let displayPics = document.getElementsByClassName("item");
displayPics[currentSlideIndex].classList.add("activate");
console.log (displayPics);

let allThumbnails = document.getElementsByClassName("thumbnail-active");
allThumbnails[currentSlideIndex].classList.add("thummbnail-active");
console.log (allThumbnails);

const buttonDown = document.querySelector (".button-down");
console.log (buttonDown);
buttonDown.addEventListener ("click", function() {
    console.log(currentSlideIndex);
    displayPics[currentSlideIndex].classList.remove("thumbnail-active");
    displayPics[currentSlideIndex].classList.remove("activate");
    if (currentSlideIndex < (displayPics.length-1)){
        currentSlideIndex++;
    }
    else {
        currentSlideIndex = 0;
    }
    displayPics[currentSlideIndex].classList.add("thumbnail-active");
    displayPics[currentSlideIndex].classList.add("activate");
});

const buttonUp = document.querySelector (".button-up");
console.log (buttonUp);
buttonUp.addEventListener ("click", function() {
    displayPics[currentSlideIndex].classList.remove("thumbnail-active");
    displayPics[currentSlideIndex].classList.remove("activate");
    if (currentSlideIndex > 0 ) {
        currentSlideIndex--;
    }
    else {
        currentSlideIndex = (displayPics.length - 1);
    }
    displayPics[currentSlideIndex].classList.add("thumbnail-active");
    displayPics[currentSlideIndex].classList.add("activate");
    
});
















// ALTRI MODI PER FARE IL CICLO FOR ESERCIZIO

/* for (let key in arrayImages[i]) {
        console.log(arrayImages[i][key]);
        imgContainer.innerHTML +=
        `<div class= "">
            <div>
                <img src="${arrayImages[i]['url']}" alt="">
            </div>
            <div>
                <h2>
                    ${arrayImages[i]['title']}
                </h2>
            </div>
            <div>
                <p>
                    ${arrayImages[i]['description']}
                </p>
            </div>
        </div>`
    };
*/

/* arrayImages.forEach((element) => {
    console.log(element);
    arrayImages.innerHTML +=
    `
    <div>${element}</div>
    `;
});
*/


