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

    //Search
    $(document).ready(() => {
      $('#searchForm').on("submit", (e) => {
        console.log($('#displayText').val());
        e.preventDefault();
      });
    });

    function getMovies(searchText) {
      // console.log(displayText);
      axios.get("https://rickandmortyapi.com/api/character/?name=" + searchText)
      .then((response) =>{
        // console.log(response);
        let movies = response.results.name;
        console.log(movies);
        let output = "";
        $.each(movies, (index, movie) => {
          output += `
          <div class="col-md-3">
            <div class="well text-center">
            <img scr="${movie.image}">
            <h5>${movie.name}</h5>
            <a onclick="movieSelected("${movie.id}")" class="btn btn- primary" href="#">More Details</a>
            </div>
          </div>
          `
        });
        $("#movies").html(output);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    fetchCharacters();
    fetchEpisodes();
    fetchLocations();



});

// THIS IS THE API PART
// THIS IS THE API YOU COULD CHECK THE DOCUMENTATION "https://rickandmortyapi.com/""

//

const ENDPOINTS = {
    base:       "https://rickandmortyapi.com/api/",
    characters: "https://rickandmortyapi.com/api/character",
    locations:  "https://rickandmortyapi.com/api/location",
    episodes:   "https://rickandmortyapi.com/api/episode"
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
