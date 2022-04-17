class SearchBar extends HTMLElement {
  
  connectedCallback(){
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render(){
    this.innerHTML = `
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-4">
          <h5 class="mt-5">Search country</h5>
          <div class="input-group mb-5">
            <input type="text" class="form-control" id="searchElement" placeholder="Search..">
            <button class="btn btn-outline-primary" type="submit" id="searchButton"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>`;

    this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);