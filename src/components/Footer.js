import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <div>
         <Navbar expand="lg" className="bg-dark  ">
      <Container>
        <Navbar.Brand href="#" className='text-warning fw-italic'>
            <p className=''>copy rights are reserved @ Quiz App</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Footer