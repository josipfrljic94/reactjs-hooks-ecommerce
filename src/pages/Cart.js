import React,{useContext} from 'react';
import {StoreContext} from '../StoreContext';
import CartItem from '../components/CartItem'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'

export default function Cart() {
  const value= useContext(StoreContext);
  const [cart,setcart]= value.cart
  const addtoCart=value.addtoCart;
  const deletetoCart=value.deletetoCart;
 
  console.log(cart)
 
    return (
      <Container className='product-list'>
        <Row lg={7} md={8} sm={12}>
          {cart.map(product=>{
             return( <CartItem key={Math.floor(Math.random() * 1000000000)} product={product} addtoCart={addtoCart} deletetoCart={deletetoCart}/>)
            
          })}
          </Row >
       </Container >
         
    )
}
