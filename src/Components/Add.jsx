import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import uploadImg from '../assets/placeholder.jpg'
import { ToastContainer, toast } from 'react-toastify';



function Add() {
  const [preview,setPreview] = useState("")
  const [imageFileStatus,setImageFileStatus]= useState(false)

  const [projectDetails,setProjectDetails] = useState({
    title:"",language:"",overview:"",github:"",website:"",projectImage:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () =>{
     setShow(false);
  setProjectDetails({title:"",language:"",overview:"",github:"",website:"",projectImage:""})
  }

  const handleShow = () => setShow(true);
  console.log(projectDetails);

  useEffect(()=>{
    if(projectDetails.projectImage.type=="image/png" || projectDetails.projectImage.type=="image/jpg" || projectDetails.projectImage.type=="image/jpeg"){
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }else{
      setPreview(uploadImg)
      setImageFileStatus(false)
      setProjectDetails({...projectDetails,projectImage:""})
    }
  },[projectDetails.projectImage])


  const handleUploadProject =()=>{
    const {title,language,overview,github,website,projectImage}=projectDetails
    if(!title || !language || !overview || !github || !website || !projectImage){
      toast.warning("Please the form Completely!!!!")
    }else{
      const reqBody =new FormData()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader ={
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
      }
      //api call

    }
  }

  return (
    <>
    <button onClick={handleShow} className='btn'><i className='fa-solid fa-plus me-1'></i> Add New</button>
    
      <Modal 
      size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title> New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
          <label >
            
            <input type="file"  style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>

            <img height={'200px'} className='img-fluid' src={preview} alt="" />
          
          </label>
          {!imageFileStatus &&
            <div className='text-danger fw-bolder my-2'>*Upload only following file types(png,jpg,jpeg) here!!!</div>}
           </div>


            <div className='col-lg-8'>
    <div className='mb-2'> 
    <input type="text"  className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
    </div>
     <div className='mb-2'>
      <input type="text"  className='form-control' placeholder='Languages usedin the projects' value={projectDetails.language} onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
      </div>
    <div className='mb-2'> 
    <input type="text"  className='form-control' placeholder='Prject GITHUB Link' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>
    </div>
    <div className='mb-2'> 
    <input type="text"  className='form-control' placeholder='Project WEBSITE Link' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
    </div>
    </div>


   <div className=''> <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})} /></div>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUploadProject}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    
    </>
  )
}

export default Add