import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px',width:'100%'}} className="d-flex justify-content-center align-items-center flex-column  text-light mt-5 shadow">
      <div className="footerr-content d-flex justify-content-evenly w-100 ">
        <div style={{width:'400px'}} className="website">
          <h4> <i style={{height:'25px'}} class="fa-solid fa-database me-2"></i>Project Fair</h4>
          <h6 style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Luminar team with the help of contributers</h6>
          <h6>Code Liscensed Luminar,docs cc By 3.0</h6>
          <p>Currently V1.0.0</p>
         

        </div>

        <div className="links d-flex flex-column">
          <h4 d-flex>Links</h4>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link  to='/login' style={{textDecoration:'none',color:'white'}}>Login</Link>
          <Link  to='/register' style={{textDecoration:'none',color:'white'}}>Register</Link>
        </div>
        

        <div className="links d-flex flex-column">
          <h4>Guides</h4>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
          <a href="https://www.w3schools.com/react/react_router.asp" target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
          <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>

        </div>
        <div className='contact d-flex flex-column flex-wrap'>
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input type="text" className="form-control me-1" placeholder='Enter your Mail' />
            <button className='btn btn-warning ms-1'><i class="fa-solid fa-arrow-right fa-beat"></i></button>
          </div>

      
        <div className="icons d-flex justify-content-between mt-3 fs-5">
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>
        
 
        </div>

        </div>
       </div>
      <p>Copyright © 2023 Project-Fair.Built with React</p>
      
      </div>

  )
}

export default Footer