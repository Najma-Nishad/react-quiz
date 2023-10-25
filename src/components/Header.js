import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar expand='lg' className=" bg-dark ">
      <Container>
        <Navbar.Brand href="#" className='text-warning fw-semibold fs-3'>QUIZ APP</Navbar.Brand>
      </Container>
    </Navbar> 
    </>
  )
}

export default Header