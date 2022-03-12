import React from 'react'
import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    //console.log(products)
    const [search, setSearch] = useState("")
    const [checked, setChecked] = useState(false)

    const handleSearch = function (event) {
      //console.log(event.target.value)
      setSearch(event.target.value)
    }

    const handleCheckbox = function (event) {
      setChecked(event.target.checked)
    }

    let filteredProducts = jsonData.filter((eachProduct) => {
      if(eachProduct.name.toLowerCase().includes(search) || eachProduct.price.toLowerCase().includes(search)) {
        return eachProduct
      }
    })

    if(checked) { 
      filteredProducts = jsonData.filter((eachProduct) => {
      return eachProduct.inStock === true})
  }

  return (
    <div>
       <h1>IronStore</h1>

       <SearchBar search={search} handleSearch={handleSearch} handleCheckbox={handleCheckbox}/>

       <ProductTable products={filteredProducts}/>


    </div>  
  )
}

export default ProductsPage