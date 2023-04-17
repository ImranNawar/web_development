import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const { prod_id } = useParams();
  const navigation = useNavigate();
  return (
    <div>Product # {prod_id}
      <p>SELECT * from products WHERE product_id=1</p>
      <button style={{ width: 300, height: 100, backgroundColor: 'blue', color: 'white' }}
        onClick={() => {
          navigation(-1)
        }}>BACK</button>
    </div>
  )
}

export default Product