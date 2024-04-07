import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';



function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <Card onClick={handleShow} className='shadow mb-5 btn' style={{ width: '28rem' }}>
    <Card.Img height={'200px'} variant="top" src="https://clockify.me/blog/wp-content/uploads/2023/01/Project-cost-management-cover.png" />
    <Card.Body>
      <Card.Title>Project Title</Card.Title>
    </Card.Body>
  </Card>
  <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
              <img className='img-fluid' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="" />
            </div>
            <div className='col-lg-6'>
              <h3>Project Title</h3>
              <h5><span className='fw-bolder'>Languages Used : HTML, CSS, JS</span></h5>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description : </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi animi libero at praesentium iste rerum beatae delectus nesciunt ducimus  </p>
            </div>
            </div>
            <div className='float-start mt-2'>
              <a href={'https://github.com/'} target='_blank' className='btn btn-secondary' onClick={handleClose}>
                <i className='fa-brands fa-github'></i>
              </a>
             <a href={'https://www.google.com/search?q=react+projects&oq=react+pr&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyBggAEEUYOTIKCAEQABixAxiABDIMCAIQABgUGIcCGIAEMgcIAxAAGIAEMgoIBBAAGLEDGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGDzSAQg0MTg2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'}  target='_blank'  className='btn btn-secondary ms-2' onClick={handleClose}>
              <i className='fa-solid fa-link'></i>
             </a>

            </div>
           
        </Modal.Body>
       
      </Modal>
  </>
  )
}

export default ProjectCard