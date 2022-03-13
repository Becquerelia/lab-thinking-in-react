import React from 'react'
import ProductRow from "./ProductRow"

function ProductTable(props) {
  const {products} = props
  
  return (
    <div className='centerDisp'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((eachProduct)=>{
            return(
              <tr key={eachProduct.id}>
                <ProductRow eachProduct={eachProduct} />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>   
  )
}

export default ProductTable