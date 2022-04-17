class AppBar extends HTMLElement {

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
      <a href="/" class="d-flex text-dark text-decoration-none">
        <span class="fs-4 h1">Corona Virus Statistic</span>
      </a>`;
  }
}

customElements.define("app-bar", AppBar);