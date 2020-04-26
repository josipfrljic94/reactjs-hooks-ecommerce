import React from 'react'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

export default function Product({product},{children}) {
    

    return (
       
        <Card style={{width:'20rem'}} className='border-0 shadow rounded m-4 bg-card  '>
        <Link to={`/detail/${product.title}`}>
           
        <Card.Img className="g-card-image bg-image1"  src={product.img[1]}/>
        <Card.Img className="g-card-image bg-image2"  src={product.img[0]}/>
        
        </Link> 
        <Card.Body>
                <Card.Text className='d-flex align-items-center justify-content-between' >
           
           <Col className='text-left'>{product.title}</Col> 
           <Col className='text-right'>{product.price}</Col> 
            </Card.Text>   
        </Card.Body>
        </Card>
         
       
    )
}


