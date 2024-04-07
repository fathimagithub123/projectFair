import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Header({insideDashBoard}) {
  return (
    <Navbar style={{zIndex:'1'}} className=" card  shadow top-0 position-fixed w-100">
    <Container>
      <Navbar.Brand >
      <Link style={{textDecoration:'none'}} className='fw-bolder' to={'/'}><i class="fa-solid fa-database"></i> Project Fair</Link>
      </Navbar.Brand>
     { insideDashBoard &&
     
     <div className='ms-auto'>
        <button className='btn btn-link'> Logout <i className='fa-solid fa-arrow-right'></i></button>
      </div>
      }
    </Container>
  </Navbar>
  )
}

export default Header