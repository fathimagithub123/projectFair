import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
  const [open, setOpen] = useState(false);


  return (
    <>

    <div className='d-flex justify-content-between'>
      <h3 className='text-warning'> Use Profile</h3>
      <button   onClick={() => setOpen(!open)} className='btn fw-bolder'><i className='fa-solid fa-chevron-down'></i></button>
    </div>
    <Collapse in={open}>
        <div className='row justify-content-center rounded align-items-center shadow p-3' id="example-collapse-text">
         <label className='text-center'>
       <input type="file" style={{display:'none'}} />
       <img width={'200px'} height={'200px'} className='rounded-circle mb-2' src="https://pngfreepic.com/wp-content/uploads/2022/09/1a886b15-336x350.png?v=1665029353" alt="" />

         </label>
         <div className='mb-2'> <input type="text" className='form-control'placeholder='Github Link' /></div>
         <div className='mb-2'><input type="text" className='form-control'placeholder='LinkedIn URL' /></div>
         <div className='d-grid'><button className='btn btn-warning'>Update Profile</button></div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile