import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function Edit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit'></i></button>
    
      <Modal 
      size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
          <label >
            
            <input type="file"  style={{display:'none'}}/>
            <img height={'200px'} className='img-fluid' src="https://static.vecteezy.com/system/resources/thumbnails/005/261/219/small/photo-upload-icon-free-vector.jpg" alt="" />
          
          </label>
           </div>


            <div className='col-lg-8'>
    <div className='mb-2'> 
    <input type="text"  className='form-control' placeholder='Project Title'/>
    </div>
     <div className='mb-2'>
      <input type="text"  className='form-control' placeholder='Languages usedin the projects'/>
      </div>
    <div className='mb-2'> 
    <input type="text"  className='form-control' placeholder='Prject GITHUB Link'/>
    </div>
    <div className='mb-2'> 
    <input type="text"  className='form-control' placeholder='Project WEBSITE Link'/>
    </div>

   <div> <input type="text" className='form-control' placeholder='Project Overview' /></div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Edit