class UI {
  constructor() {
    this.plateContainer = document.getElementById("plates-container");
  }

  showCharacters(charactersObject) {
    console.log(charactersObject);
    const { info, results } = charactersObject;
    this.plateContainer.innerHTML = results
      .map(result => {
        return `
          <div class="card" style="color:#333;">
            <div class="card-header">
              <img src="${result.image}">
            </div>
          </div>
      `;
      })
      .join("");
  }
}
