// datasources/brand.js
const { DataSource } = require('apollo-datasource');

// Pull data from db
// call other REST service


const brandsData = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Google'},
    {id: 3, name: 'Adobe'},
]

class BrandAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  async getBrands() {
      return await brandsData;
  }

  async getBrand(id) {
     return await brandsData.find (brand => brand.id == id)
  }
}


// default default
module.exports = BrandAPI;