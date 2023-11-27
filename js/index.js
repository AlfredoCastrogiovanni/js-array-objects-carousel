
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeImg = 0;

const carouselEl = document.querySelector(".mainColumn");
const thumbnailsEl = document.querySelector(".thumbnails");
const beforeButton = document.getElementById("previous");
const afterButton = document.getElementById("after");


createFocusImage(images, carouselEl, activeImg);
createThumbnails(images,thumbnailsEl);

beforeButton.addEventListener("click", () => {
    activeImg == 0 ? activeImg = images.length : 0;

    activeImg -= 1;

    createFocusImage(images, carouselEl, activeImg);
});

afterButton.addEventListener("click", () => {
    activeImg == images.length - 1 ? activeImg = -1 : 0;

    activeImg += 1;

    createFocusImage(images, carouselEl, activeImg);
});


// ==================== Functions ====================

function createFocusImage(images, output, activeImg) {
    output.innerHTML = `
    <article>
        <img src="${images[activeImg].image}" alt="${images[activeImg].title}'s photo">
        <div class="description">
            <h2>${images[activeImg].title}</h2>
            <p>${images[activeImg].text}</p>
        </div>
    </article>`
}

function createThumbnails(images, output) {
    images.forEach(element => {
        output.innerHTML += `
        <div class="thumbnail">
            <img src="${element.image}" alt="">
        </div>`
    });
}