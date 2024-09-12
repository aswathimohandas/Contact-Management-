import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav=useNavigate()
  const lgout=()=>{
    nav('/')
    sessionStoage.removeItem('userData')
  }
  return (
    <>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <h3 className='text-center'><i className="fa-solid fa-address-book fa-beat fa-2xl m-2 text-center" style={{color: "#7f0b17",}} />
          Contact Management</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header
