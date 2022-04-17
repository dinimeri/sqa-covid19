const baseUrl = "https://api.covid19api.com";

class DataSource {
  static async searchCountry(keyword) {
    return fetch(`${baseUrl}/total/country/${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      const sourceData = responseJson[responseJson.length - 1];
      const sourceArray = [sourceData];
      if(!sourceData) {
        return Promise.reject(`${keyword} is not found`);
      }
      if(sourceArray) {
        return Promise.resolve(sourceArray);
      }
    })
  };
}

export default DataSource;