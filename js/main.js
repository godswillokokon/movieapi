// $(document).ready(function () {

//     $("#sidebar").mCustomScrollbar({
//          theme: "minimal"
//     });

//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//     });

// });

$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    fetchCharacters();

});

// THIS IS THE API PART
// THIS IS THE API YOU COULD CHECK THE DOCUMENTATION "https://rickandmortyapi.com/""

//
const ENDPOINTS = {
    base: "https://rickandmortyapi.com/api/",
    characters: "https://rickandmortyapi.com/api/character",
    locations: "https://rickandmortyapi.com/api/location",
    episodes: "https://rickandmortyapi.com/api/episode"
}

// UI object instance
const ui = new UI();

// Fetch characters
async function fetchCharacters() {
    const response = await fetch(ENDPOINTS.characters);
    const data = await response.json()
        .catch(err => console.error(err));
    return data;
}

const characters = fetchCharacters()
    .then(characters => {
        if(ui.showCharacters(characters)) {
            registerEventListeners();
        }
    });

// Fetch episodes
async function fetchEpisodes() {
    const response = await fetch(ENDPOINTS.episodes);
    const data = await response.json()
        .catch(err => console.error(err));
    return data;
}

const episodes = fetchEpisodes()
    .then(episodes => {
        if(ui.showEpisodes(episodes)) {
            registerEventListeners();
        }
    });

// Fetch locations
async function fetchLocations() {
    const response = await fetch(ENDPOINTS.locations);
    const data = await response.json()
        .catch(err => console.error(err));
    return data;
}

const locations = fetchLocations()
    .then(locations => {
        if(ui.showLocations(locations)) {
            registerEventListeners();
        }
    });

// Listen for modal toggle button
function registerEventListeners() {
    const togglers = document.querySelectorAll('.toggler');
    togglers.forEach(toggler => toggler.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target)
    }))
}
