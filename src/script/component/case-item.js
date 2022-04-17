class CaseItem extends HTMLElement {
  set cas(cas) {
    this._case = cas;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <h2>Covid-19 <span class="fw-bold">${this._case.Country}</span></h2>
        <div class="row mt-5">
          <div class="col-12 col-md-4">
            <h5>Confirmed Case</h5>
            <div class="card text-warning border-warning mb-3 py-5">
              <div class="card-body">
                <p class="text-center mb-0 fs-2 fw-bold">${this._case.Confirmed.toLocaleString('en-US')}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <h5>Recovered Case</h5>
            <div class="card text-success border-success mb-3 py-5">
              <div class="card-body">
                <p class="text-center mb-0 fs-2 fw-bold">${this._case.Active.toLocaleString('en-US')}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <h5>Death Case</h5>
            <div class="card text-danger border-danger mb-5 py-5">
              <div class="card-body">
                <p class="text-center mb-0 fs-2 fw-bold">${this._case.Deaths.toLocaleString('en-US')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("case-item", CaseItem);