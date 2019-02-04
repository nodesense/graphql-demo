// resolvers.js
// convert and fetch data from data sources
module.exports = {
    Query: {
        brands: async (_, __, { dataSources }) => 
            dataSources.brandAPI.getBrands(),

        products:  async (_, __, { dataSources }) => 
                    dataSources.productAPI.getProducts(),

        getProduct:  async (_, {id} , { dataSources }) => 
                    dataSources.productAPI.getProduct(id),

        getBrand: async (_, {id}, {dataSources}) => dataSources.brandAPI.getBrand(id)
    }
}