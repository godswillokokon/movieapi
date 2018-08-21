class UI {
  constructor() {
    this.plateContainer = document.getElementById("plates-container");// points to entry point
  }

  // show characters in DOM
  showCharacters(charactersObject) {
    console.log(charactersObject);
    const { info, results } = charactersObject;
    this.plateContainer.innerHTML = results
      .map(result => {
        return `
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
                      <a href="${result.location.url}">${
          result.location.name
        }</a>
                    </small>
                  </div>
                </div>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Origin</small>
                    <small class="mb-1 text-warning">
                      <a href="${result.origin.url}">${result.origin.name}</a>
                    </small>
                  </div>
                </div>

                <div href="#" class="list-group-item list-group-item-action list-group-item-dark bg-dark">
                  <div class="d-flex w-100 justify-content-between">
                    <small class="mb-1 text-white">Gender</small>
                    <small class="mb-1 text-warning">${result.gender}</small>
                  </div>
                </div>

                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark bg-dark text-white">
                    Episodes
                    <span class="badge badge-primary badge-pill">${result.episode.length}</span>
                  </li>
                </ul>

                <a href="${
                  result.url
                }" class="btn btn-primary" style="width:100%">See Character</a>

              </div>
            </div>
          </div>

      `;
      })
      .join("");
  }
}
