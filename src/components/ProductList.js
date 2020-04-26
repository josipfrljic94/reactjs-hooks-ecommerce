import React,{useContext} from 'react'
import {StoreContext} from '../StoreContext'
import Product from './Product'

import Container from 'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'

export default function ProductList(props) {

   const value = useContext(StoreContext);
   const[ state,setstate]=value.value;
  
    let Tip=(props.productsType).productsType
    console.log(Tip)
   
let Filtriraniproizvodi=state.filter(function(p){
   return ((p.type).includes(`${Tip}`)===true)
})


    return (
       <Container className='product-list'>
          <Row lg={7} md={8} sm={12}>
     
         
         {Filtriraniproizvodi.map(product=>{
          return(
                  <Product  key={product.id} product={product} />
                  )})}

      </Row>
      </Container>
      )
}

    
