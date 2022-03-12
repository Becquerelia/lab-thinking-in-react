import React from 'react'

function ProductRow(props) {

  const {products} = props

  const redStyle = {
    color: "red",
  }

  const blackStyle = {
    color: "black",
  }

  return (

    <div>

      {products.map((eachProduct)=>{
        return (
          <tr key={eachProduct.id} >
            <td style={eachProduct.inStock ? blackStyle : redStyle}>{eachProduct.name}</td>
            <td>{eachProduct.price}</td>
         </tr>
        )
      })}

    </div>

  )
}

export default ProductRow