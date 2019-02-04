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

  async deleteBrand(id) {
    const index = brandsData.findIndex(brand => brand.id == id);
    brandsData.splice(index, 1);
    return await {} // return empty object
  }

  async updateBrand(id, name) {
     const brand =  await brandsData.find (brand => brand.id == id)
     if (brand) {
       brand.name = name;
     }

     return await brand;
  }

}


// default default
module.exports = BrandAPI;