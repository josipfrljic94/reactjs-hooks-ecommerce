import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GiLargeDress} from "react-icons/gi";
import {FaCheckSquare} from "react-icons/fa";
import {GiZipper} from "react-icons/gi";
import {GiSewingNeedle} from "react-icons/gi";


export default function OurService() {
    return (
        <div className='our-service'>
            <Container className='flex'>
            <Row style={{minHeight:'16rem'}} >

                <Col lg={3} md={7} xs={6}   className='bg-design mb-1 shadow-lg rounded' >
                    <h3>Quality design</h3>
                    <GiLargeDress/>
                </Col>
                
                <Col  lg={3} md={5} xs={6} className='bg-grey mb-1 text-info shadow-lg rounded '> 
                       <h5 className='mt-5 h-100'>Quality and beauty design</h5>
                </Col>

                <Col lg={3} md={7} xs={6} className='bg-material mb-1 shadow-lg rounded '> 
                        <h3>Finest touch</h3>
                        <FaCheckSquare/>
                </Col>
                <Col lg={3} md={5} xs={6} className='bg-grey mb-1 text-primary shadow-lg rounded '>
                    <h5 className='mt-5 h-100'>Product from most quality materials</h5>
                    </Col>
            </Row>

            <Row style={{minHeight:'16rem'}}  className='mt-1'>
            <Col  lg={3} md={5} xs={6} className='bg-grey text-info  mb-1 shadow-lg rounded '>
                <h5 className='mt-5 h-100'>Most creative samples from woll</h5>
            </Col>
            
            <Col lg={3} md={7} xs={6}  className='bg-sample mb-1 shadow-lg rounded' >
                <h3>Creative samples</h3>
                <GiSewingNeedle/>
            </Col>
                
                
                <Col lg={3} md={5} xs={6} className='bg-grey mb-1 text-primary  shadow-lg rounded '>
                    <h5 className='mt-5 h-100'>Wish your zip, you will get it</h5>
                </Col>
                
                <Col lg={3} md={7} xs={6}className='bg-zip mb-1 shadow-lg rounded '>
                    <h3>Modern zip</h3>
                        <GiZipper/>
                </Col>
               
            </Row>
            
            </Container>
        </div>
    )
}
