import './case-item.js';

class CaseList extends HTMLElement {
  set cases(cases) {
    this._cases = cases;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `
    <div class="container alert alert-warning d-flex justify-content-center" role="alert">
      <h5>
        <i class="fas fa-exclamation-triangle"></i> ${message}
      </h5>
    </div>`;
  }

  render() {
    this.innerHTML = "";
    this._cases.forEach(cas => {
      const caseElement = document.createElement("case-item");
      caseElement.cas = cas;
      this.appendChild(caseElement);
    })
  }
}

customElements.define("case-list", CaseList);