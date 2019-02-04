// datasources/product.js
const { DataSource } = require('apollo-datasource');
const fetch = require('node-fetch');

// Pull data from db
// call other REST service

 
class ProductAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  async getProducts() {
       return await fetch("http://api.nodesense.ai/api/products")
                    .then (response => response.json() );
  }


  async getProduct(id) {
    return await fetch(`http://api.nodesense.ai/api/products/${id}`)
                 .then (response => response.json() );
  }


  async deleteProduct(id) {
    return await fetch(`http://api.nodesense.ai/api/products/${id}`, {
                        method: 'DELETE'
                        })
                        .then (response => response.json() );
  }


  async  updateProduct(id, price) {
    return await fetch(`http://api.nodesense.ai/api/products/${id}`, {
                        method: 'PATCH',
                        headers: {
                          'content-type': 'application/json'
                        },
                        body: JSON.stringify( {price} )
                        })
                        .then (response => response.json() );
  }

}


// default default
module.exports = ProductAPI;