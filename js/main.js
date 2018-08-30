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

    fetchCharacters();
    fetchEpisodes();
    fetchLocations();



});


async function getNext(info_next) {
  fetch(info_next)
  .then((response) => response.json())
  .then((data) => {
    var info = data.info;
    var results = data.results;
    var output = '';



    $.each(results, (index, result) => {
       output += `
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card bg-dark text-white mb-3" style="color:#333;">
          <img src="${result.image}" class="img-responsive card-img-top">
          <div class="card-body">
            <h5 class="card-title">${result.name}</h5>

            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Gender</small>
                <small class="mb-1 text-warning">${result.gender}</small>
              </div>
            </div>

            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Species</small>
                <small class="mb-1 text-warning">${result.species}</small>
              </div>
            </div>

            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Status</small>
                <small class="mb-1 text-warning">${result.status}</small>
              </div>
            </div>



            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Location</small>
                <small class="mb-1 text-warning">
                  <a
                    class="toggler"
                    href="${result.location}">
                    ${result.location.name}
                  </a>
                </small>
              </div>
            </div>

            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Origin</small>
                <small class="mb-1 text-warning">
                  <a class="toggler" href="${result.origin}">${
      result.origin.name
    }</a>
                </small>
              </div>
            </div>

            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Gender</small>
                <small class="mb-1 text-warning">${result.gender}</small>
              </div>
            </div>

            <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1 text-white">Created</small>

                <small class="mb-1 text-warning">${result.created}</small>
              </div>
            </div>

            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark bg-dark text-white">
                Episodes
              <span class="badge badge-primary badge-pill" href="${result.episode}">${
                  result.episode.length
                }</span>
              </li>
            </ul>

            <!-- <button data-toggle="modal" data-target="#exampleModal" data-id="${
              result.episode
            }" class="btn btn-secondary toggler" style="width:100%">Download</a> -->

          </div>
        </div>
      </div>
      `;
    });

    $('#plates-container').html(output);

  });
// .join("");
  document.getElementById('#pages-container').innerHTML = `
      <div col-12>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="${info.prev}" id="prev" tabindex="-1">Previous</a>
            </li>

            <li class="page-item">
              <a class="page-link" href="#" onclick="getNext('${info.next}')" id="next" >Next</a>
            </li>
            <li class="page-item"><a class="page-link">1 of ${info.pages} Pages</a></li>
          </ul>
        </nav>
      </div>
    `;
}


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

// $('#pagination-demo').twbsPagination({
//         totalPages: 35,
//         visiblePages: 7,
//         onPageClick: function (event, page) {
//             $('#page-content').text('Page ' + page);
//         }
//     });
let filterInput = document.getElementById('filterInput');
//add event listener
filterInput.addEventListener('keyup', filterNames);
function filterNames() {
  //get value of filterInput
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  // console.log(filterValue);

  //get names ul
  let container = document.getElementById('names');
  let div = container.querySelectorAll('pages-container');

  //loop through collection-item lis
  for(let i = 0; i < div.length; i++){
    let a = div[i].getElementsByTagName('a')[0];
    console.log("function");
    //if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      div[i].style.display = '';
      console.log("working");
    } else {
      div[i].style.display = 'none';
      console.log("not working");
    }
  }
}
