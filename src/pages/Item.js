import React,{useContext,useState} from 'react'
import { useHistory} from 'react-router-dom'
import {StoreContext} from '../StoreContext';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import MyButton from '../components/MyButton'

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

<Row xl={12} lg={12} md={12} sd={12} className='btn-container '>
  
  <Col >
  <h1 className='text-primary'>{Item.title}</h1> 
       <h3 className='text-primary'>{Item.price}</h3>
  </Col>

        <Col>
        <button type="button" style={{height:'3em'}} className="btn btn-info btn-link "  onClick={()=>location.goBack()} >Back</button>
            <select type="button" style={{height:'3em'}} className="btn btn-primary  m-2" value={size} onChange={(event) =>(setsize(event.target.value))}>
              
                <option value='S'>S</option>
        <option value='M'>M</option>
                <option value='L'>L</option>
            </select>
            <button type="button" style={{height:'3em'}} className="btn btn-primary  m-2" onClick={addtoCart.bind(this, Item)} >Add</button>
            <Link to={`/cart`}><MyButton  gumbtekst={'Check chart'} variant={'primary'}/></Link> 
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


  {/* <h1>{Item.title}</h1> 
        <h4>{Item.type[0]}</h4>  */}
    {/* <h5>{Item.price}</h5> */}
     {/* <img src={Item.img[0]} alt={Item.name}width='300px'></img>
    <img src={Item.img[1]} alt={Item.name}width='300px'></img> */}