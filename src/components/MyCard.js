import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

export default function MyCard({product}) {
    return (
        <Card style={{ width: '22rem' }} className='border-0 shadow-lg rounded feature'>
 <Link to={`/ourproduct/${product.type[0]}`}>
 <Card.Img className="g-card-image "  src={product.img[0]}/>
 </Link> 
  <Card.Body>
    
    <Card.Text className='text-center'>
      {product.type[0]}
     
    </Card.Text>
   
  </Card.Body>
</Card>
            
        
    )
}
