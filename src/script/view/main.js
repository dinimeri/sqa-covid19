import '../component/case-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const caseListElement = document.querySelector("case-list");

  const searchButtonClicked = async () => {
    try {
      const result = await DataSource.searchCountry(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    caseListElement.cases = results;
  };

  const fallbackResult = message => {
    caseListElement.renderError(message);
  };
  
  searchElement.clickEvent = searchButtonClicked;
};

export default main;
