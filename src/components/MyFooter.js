import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaFacebook } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import {MdLocalPhone } from "react-icons/md";








export default function MyFooter() {
    return (
        <div>
            <footer className="pt-5 bg-warning border border-right-0 border-left-0 border-dgrey" >
            <Container fluid={true}  className="d-row-flex justify-content-xl-center    text-center">
  <Row  className=" d-flex justify-content-xl-center justify-content-xl-beetween w-100">
    <Col xs xl="2" className='mr-auto '>
     <h5 className='p-4'>Bojko design</h5>
     <FaFacebook size={28}/>
     <FaLinkedin size={28}/>
     <FaYoutube size={28}/>
     <FaInstagram size={28}/>
    </Col>
    <Col md="auto" xl="4" >
      <h5 className='p-4'>Quick Link</h5>

      < ListGroup ul className='list-group'>
        <ListGroup.Item as ='li' className='list-group-item'>Home</ListGroup.Item>
        <ListGroup.Item as ='li' className='list-group-item'>OurProduct</ListGroup.Item>
        <ListGroup.Item as ='li' className='list-group-item'>About Me</ListGroup.Item>
        <ListGroup.Item as ='li' className='list-group-item'>Services</ListGroup.Item>
        <ListGroup.Item as ='li' className='list-group-item'>Cart</ListGroup.Item>

      </ListGroup>
    
    </Col>
    <Col xs xl="4" className='ml-auto'>
    <h5 className='p-4'>Location</h5>
    <ListGroup  ul className='list-group'>
    <ListGroup.Item as ='li' className='list-group-item'>< MdLocationOn/>Lorem ipsum</ListGroup.Item>
    <ListGroup.Item as ='li' className='list-group-item'><MdMailOutline/>(+385)77777777</ListGroup.Item>
    <ListGroup.Item as ='li' className='list-group-item'><MdLocalPhone/>info@bojkodesign</ListGroup.Item>

    </ListGroup>
    </Col>
  </Row>
  
</Container>
        </footer>
    
            
        </div>
    )
}
