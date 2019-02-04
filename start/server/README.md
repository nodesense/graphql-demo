type Brand {
    id: Int! - ! mandatory
    name: String
}

git clone https://github.com/apollographql/fullstack-tutorial/
cd fullstack-tutorial
cd start
cd server
npm install


https://www.apollographql.com/docs/tutorial/schema.html

schema.js

const { gql } = require('apollo-server');
const typeDefs = gql``
module.exports = typeDefs;






query GetBrands {
  brands {
      id
      name
  }
}


query GetProducts {
  products {
      id
      name
      price
      year
      weight
  }
}

---

query GetSingleBrand {
   getBrand(id:2) {
        id 
        name
  }
}

query GetSingleProduct {
   getProduct(id:21) {
        id 
        name
        price
        year
        brandId
  }
}

-------

query GetSingleProductById($id: ID!) {
   getProduct(id:$id) {
        id 
        name
        price
        year
        brandId
  }
}

query parameter

{
  "id": 21
}

-------


mutation DeleteBrand {
  deleteBrand(id: 1) {
    name
  }
}

----

mutation DeleteBrand($id: ID!) {
  deleteBrand(id: $id) {
    name
  }
}

query param

{
  "id": 3
}
-- 

mutation DeleteProduct {
  deleteProduct(id: 21) {
    name
  }
}
---


mutation UpdateBrand {
  updateBrand(id: 2, name: "Google Alpha") {
    name
  }
}

--

mutation UpdateProduct {
  updateProduct(id: 22, price: 10000) {
    name
  }
}