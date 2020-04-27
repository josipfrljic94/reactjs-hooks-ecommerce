import React,{useContext,useState} from 'react'
import { useHistory} from 'react-router-dom'
import {StoreContext} from '../StoreContext';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



export default function Item() {
    const value= useContext(StoreContext);
    const[ state,setstate] =value.value;
    const [cart,setcart]= value.cart
  const addtoCart= value.addtoCart;
  
  console.log(cart)
  
let location= useHistory();
let  path= location.location.pathname

 let Item= state.find(function(a){return(a.profilUrl===path)} )
 

const [size, setsize] = useState('M')
Item.size=size
 
 

    return(
        <Container className='  item-profil'>

<Row xl={12} lg={12} md={12} sd={12} className='btn-container shadow '>
  
  <Col >
  <h1 className='text-primary'>{Item.title}</h1> 
       <h3 className='text-primary'>{Item.price}</h3>
  </Col>

        <Col>
        <button type="button" style={{width:'4em'}} className="btn btn-info btn-link "  onClick={()=>location.goBack()} >Back</button>
            <select style={{width:'4em'}}  className="mdb-select md-form bg-primary  border-0 m-1 rounded p-1 " value={size} onChange={(event) =>(setsize(event.target.value))}>
              
                <option value='S'>S</option>
        <option value='M'>M</option>
                <option value='L'>L</option>
            </select>
            <button type="button" style={{width:'4em'}} className="btn btn-primary m-1" onClick={addtoCart.bind(this, Item)} >Add</button>
            <Link to={`/cart`}><button type="button" style={{width:'4em'}} className="btn btn-primary m-1 ">Cart</button></Link> 
        </Col>

    </Row>


  <Row  className='pt-3'xl={12} style={{width:'100%'}}>

    <Col xs={12} sd={12} md={12} lg={6} xl={6} className='d-flex jusify-content-center'>
      <Image className='round shadow' style={{width:'100%'}} src={Item.img[0] }  />  
    </Col>

    <Col  xs={12} sd={12} md={12} lg={6} xl={6}>
      <Image  className='round shadow' style={{width:'100%'}} src={Item.img[1]}  /> 
     </Col>
    </Row>
  
    
    </Container>
    
    )
}


  