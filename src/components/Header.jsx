import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  
  return (
    <Navbar style={{zIndex:'1'}}  className="postion-fixed w-100 top-0 border rounded">
      <Container>
        <Navbar.Brand >
          <Link className='' style={{textDecoration:'none',color:'white'}} to={'/'}><i className='fa-brands fa-docker'><span className='ms-2 fw-bolder fs-3'>Contact  Manager</span></i>
          </Link>

        </Navbar.Brand>
        
      </Container>
    </Navbar>
  )
}

export default Header
