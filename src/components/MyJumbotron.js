import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default function MyJumbotron() {
    return (
       <div >
            <Jumbotron fluid className='bg-transparent'>
                <Container className=' align-center'>
                <Row className="justify-content-center py-5">
                    <h1 className='text-white mr-auto'>Fluid jumbotron</h1>
                    <h3 className='text-secondary mt-5  text-right text'>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </h3>
                    </Row>
                </Container>
            </Jumbotron>
            </div>   
       
    )
}
