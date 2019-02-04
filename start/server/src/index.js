// index.js

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const BrandAPI = require('./datasources/brand');
const ProductAPI = require('./datasources/product');

const resolvers = require('./resolvers');


const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        brandAPI: new BrandAPI(),
        productAPI: new ProductAPI()
      })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});