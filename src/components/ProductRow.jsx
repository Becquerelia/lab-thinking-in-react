import React from 'react'

function ProductRow(props) {

  const {eachProduct} = props

  const redStyle = {
    color: "red",
  }

  const blackStyle = {
    color: "black",
  }

  return (
   
      <tr key={eachProduct.id} >
        <td style={eachProduct.inStock ? blackStyle : redStyle}>{eachProduct.name}</td>
        <td>{eachProduct.price}</td>
      </tr>
     

  )
}

export default ProductRow