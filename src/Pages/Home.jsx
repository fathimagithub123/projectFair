import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';





function Home() {

    const navigate = useNavigate()
    const [loginStatus, setLoginStatus] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setLoginStatus(true)

        } else {
            setLoginStatus(false)
        }
    }, [])


    const handleProjects =()=>{
        if(loginStatus){
            navigate('/projects')
        }else{
            toast.warning("Please login to get full access to our Projects!!!")
        }

    }
    return (
        <>
            {/* landing */}

            <div style={{ minHeight: '100vh' }} className='w-100 d-flex justify-content-center align-items-center rounded shadow'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <h1 style={{ fontSize: '70px' }}> <i class="fa-solid fa-database"></i> Project Fair</h1>
                            <p style={{ textAlign: 'justify' }}>One stop destination for all software Development projects where user can add and manage their projects as well as to access all projects available in our website...What are you waiting for...!!!</p>

                            {
                                loginStatus ?
                                    <Link to={'/dashboard'} className='btn btn-warning'>Manage your Projects <i className='fa-solid fa-arrow-right'></i></Link> :

                                    <Link to={'/login'} className='btn btn-warning'>Starts to Explore <i className='fa-solid fa-arrow-right'></i></Link>
                            }

                        </div>
                        <div className='col-lg-6'>
                            <img className='img-fluid' src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png " alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <h1 className='text-center mb-5'>Explore Our Projects</h1>
                <marquee >
                    <div className='d-flex'>
                        <div className='me-5'>

                            <ProjectCard />

                        </div>
                    </div>
                </marquee>
                <button onClick={handleProjects} className='btn btn-link mt-3 text-center'>Click Here to View More Projects  </button>
            </div>
            {/* testimony */}
            <div className='d-flex justify-content-center align-items-center mb-5 mt-5 flex-column'>
                <h1>Our Client Testimony</h1>
                <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body >
                            <Card.Title className='d-flex justify-content-ecenter align-items-center flex-column'>
                                <img width={'60px'} height={'60px'} className='rounded-circle imf-fluid' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                                <span>Max Miller</span></Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-center'>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>

                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aperiam pariatur excepturi fugiat hic. Eveniet explicabo neque officia, quaerat enim perspiciatis optio veritatis</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body >
                            <Card.Title className='d-flex justify-content-ecenter align-items-center flex-column'>
                                <img width={'60px'} height={'60px'} className='rounded-circle imf-fluid' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                                <span>Luk Damian</span></Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-center'>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i class="fa-regular fa-star  text-light"></i>

                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aperiam pariatur excepturi fugiat hic. Eveniet explicabo neque officia, quaerat enim perspiciatis optio veritatis</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body >
                            <Card.Title className='d-flex justify-content-ecenter align-items-center flex-column'>
                                <img width={'60px'} height={'60px'} className='rounded-circle imf-fluid' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                                <span>Max Miller</span></Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-center'>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i className='fa-solid fa-star text-warning'></i>
                                    <i class="fa-regular fa-star  text-light"></i>
                                    <i class="fa-regular fa-star  text-light"></i>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aperiam pariatur excepturi fugiat hic. Eveniet explicabo neque officia, quaerat enim perspiciatis optio veritatis</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </div>
            </div>

            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </>
    )
}

export default Home