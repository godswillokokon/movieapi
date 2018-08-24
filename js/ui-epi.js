class UI {
  constructor() {
    this.plateContainer = document.getElementById("plates-container"); // points to entry point
    this.pagesContainer = document.getElementById("pages-container");
    this.modal = {
      title: document.querySelector(".modal-title"),
      body: document.querySelector(".modal-body")
    };
    this.pages = 0;
    this.nextPage = 10;
  }

  // show episodes in DOM
  showEpisodes(episodesObject) {
    console.log(episodesObject);
    const { info, results } = episodesObject;

    this.plateContainer.innerHTML = results
      .map(result => {
        return `
          <div class="col-xs-6 col-sm-4 col-md-4">
            <div class="card bg-dark text-white mb-3" style="color:#333;">
              <img src="" class="img-responsive card-img-top">
              <div class="card-body">
                <h5 class="card-title">${result.name}</h5>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Date Released</small>
                    <small class="mb-1 text-warning">${result.air_date}</small>
                  </div>
                </div>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Episodes</small>
                    <small class="mb-1 text-warning">${result.episode}</small>
                  </div>
                </div>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Characters</small>
                    <small class="mb-1 text-warning">${result.characters.length}</small>
                  </div>
                </div>


                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Created</small>
                    <small class="mb-1 text-warning">${result.created}</small>
                  </div>
                </div>

                <button data-toggle="modal" data-target="#exampleModal" data-id="
                " class="btn btn-secondary toggler" style="width:100%" href="${result.url}">Download here</a>

              </div>
            </div>
          </div>
      `;
      })
      .join("");

    this.pagesContainer.innerHTML = `
        <div col-12>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="${info.prev}" tabindex="-1">Previous</a>
            </li>

            <li class="page-item">
              <a class="page-link" href="${info.next}" onclick="nextCharacters()" >Next</a>
            </li>
            <li class="page-item"><a class="page-link">1 of ${info.pages} Pages</a></li>
            </ul>
          </nav>
        </div>
      `;
  }

  toggleModal() {}
}
