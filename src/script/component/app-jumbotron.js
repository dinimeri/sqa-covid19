class AppJumbotron extends HTMLElement {

    connectedCallback(){
      this.render();
    }
  
    render(){
      this.innerHTML = `
      <div class="py-5 mb-5 text-white bg-primary rounded-3">
        <div class="container-fluid py-5 text-center">
          <h1 class="fw-bold text-sm">Covid-19 Statistic</h1>
          <p class="fs-4">View confirmed, recovered, deaths Covid-19 cases by country.</p>
        </div>
      </div>`;
    }
  }
  
  customElements.define("app-jumbotron", AppJumbotron);