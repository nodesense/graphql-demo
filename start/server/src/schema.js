// schema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
    type Brand {
        id: ID!
        name: String
    }
  
    type Product {
        id: ID!
        name: String
        brandId: Int
        year: Int
        price: Int
        camera: String
        cpu: String
        display: String
        gpu: String
        os: String
        ram: String
        size: String
        storage: String
        weight: String
    }

    type Query {
        brands: [Brand]!
        products: [Product]!

        getProduct(id: ID!): Product
        getBrand(id: ID!): Brand
    }
`

module.exports = typeDefs;