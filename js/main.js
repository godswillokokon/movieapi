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

const ENDPOINTS = {
    base: "https://rickandmortyapi.com/api/",
    characters: "https://rickandmortyapi.com/api/character",
    locations: "https://rickandmortyapi.com/api/location",
    episodes: "https://rickandmortyapi.com/api/episode"
}


const ui = new UI();

// Fetch characters
async function fetchCharacters() {
    const response = await fetch(ENDPOINTS.characters);
    const data = await response.json()
        .catch(err => console.error(err));
    return data;
}

const characters = fetchCharacters()
    .then(characters => ui.showCharacters(characters));