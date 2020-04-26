import React, {useState} from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'


export default function CartItem(props) {
   
    let product= props.product
   console.log(product,'product')
  
const addtoCart=props.addtoCart;
const deletetoCart= props.deletetoCart;

   

    const [cartnum, setcartnum] = useState(product.cart);

    const Addproduct=(Item)=>{
        addtoCart(Item)
        setcartnum(cartnum+1)
    }
    const Deleteproduct=(Item)=>{
        deletetoCart(Item)
        setcartnum(cartnum-1)
    }
    return (
        <Card style={{width:'20rem'}} className='border-0 shadow rounded m-4 bg-card  '>
            
            <Card.Img className="g-card-image "  src={product.img[0]}/>
            <Card.Body>
                <Card.Text className='d-flex align-items-center justify-content-around' >
           
           <Col className='text-left'>{product.title}</Col> 
           <Col className='text-right'>{product.price}</Col> 
           <Col>{cartnum}</Col>
           <Col>{product.size}</Col>
           <button type="button" style={{height:'3em'}} className="btn btn-info" onClick={Addproduct.bind(this, product)} >+</button>
            <button type="button" style={{height:'3em'}} className="btn btn-info" onClick={Deleteproduct.bind(this, product)} >-</button>
            </Card.Text>   
        </Card.Body>
            
           </Card>
            
           
          
        
    )
}

  {/* <button type='submit' onClick={Addproduct.bind(this, product)} >+</button>
            <button type='submit' onClick={Deleteproduct.bind(this, product)} >-</button> */}
            
{/* <Card style={{width:'20rem'}} className='border-0 shadow rounded m-4 bg-card  '>
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
        </Card> */}
         
