import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import MyCard from '../components/MyCard'

           

export default function MyCarosel({proizvodi}) {
    
    const[ state,setstate]=proizvodi;
    const filteredProducts=state.filter(product=>{
        return(product.feature===true)
    });
    return (
        <Container fluid={true} className='py-3'>
                <Row className="justify-content-around ">
                    {filteredProducts.map(product=>{
                        return( <MyCard key={product.id} product={product} />)
                    })}
                  
                  
                </Row>
            </Container>
       
            
       
    )
}


