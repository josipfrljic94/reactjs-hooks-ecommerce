import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
 import { FaShoppingCart} from "react-icons/fa";
 import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export default function MyNavbar() {

    const [bar, setbar] = useState('bg-navbar')
   
    
        function logit() {
                setbar('bg-navbar2')
               
                if((window.pageYOffset<10)===true){
                    setbar('bg-navbar')} }
      
          useEffect(() => {
            function watchScroll() {
              window.addEventListener("scroll", logit);
            }
            watchScroll();
            return () => {
              window.removeEventListener("scroll", logit);
            };
          });

    return (
        <Navbar className={bar} expand='lg' >
            
            <Navbar.Brand><h3 className='text-warning'>BOJKO</h3></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto align-items-center bg-lista ">
                <Link className="nav-link  text-primary" to="/"  >Home</Link>
                <Link  className="nav-link text-primary" >Products</Link>
                <Link className="nav-link  text-primary" to="/contact">Services</Link>
                <Link  to ={'/cart'} > <FaShoppingCart size={28}/></Link>

            </Nav>
            </Navbar.Collapse>
            
        
           </Navbar>
       
    )
}
