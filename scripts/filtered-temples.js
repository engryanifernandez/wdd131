//Hamburger button
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('nav')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };

//hamburger to x
function myFunction(x) {
    x.classList.toggle("change");
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Quezon City, Metro Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48891.jpg"
    },
    {
        templeName: "Cebu City Philippines Temple",
        location: "Cebu City, Cebu, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251.jpg"
    },
    {
        templeName: "Urdaneta Philippines Temple",
        location: "Urdaneta City, Pangasinan, Philippines",
        dedicated: "2024, April, 28",
        area: 32604,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45863.jpg"
    }
];

function displayTemples(temples) {
    const $templeCards = document.querySelector(".container");
    $templeCards.innerHTML = "";
    temples.forEach(({ templeName, location, dedicated, area, imageUrl }) => {
        $templeCards.innerHTML += `
      <div class="cardContainer">
        <h3>${templeName}</h3>
        <div>
          <p>Location: ${location}</p>
          <p>Dedicated: ${dedicated}</p>
          <p>Size: ${area}</p>
        </div>
        <figure>
          <img src="${imageUrl}" alt="${templeName}" loading="lazy" width="1920" height="1080">
        </figure>
      </div>
    `;
    });
}

function filterTemples(criteria) {
    switch (criteria) {
        case "old":
            return temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
        case "new":
            return temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) > 2000);
        case "large":
            return temples.filter(temple => temple.area > 90000);
        case "small":
            return temples.filter(temple => temple.area < 10000);
        default:
            return temples;
    }
}

document.querySelectorAll("#navBar a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const criteria = event.target.id;
        document.querySelector("#mainTitle").textContent = criteria.charAt(0).toUpperCase() + criteria.slice(1);
        const filteredTemples = filterTemples(criteria);
        displayTemples(filteredTemples);
    });
});

window.onload = () => {
    displayTemples(temples);
};