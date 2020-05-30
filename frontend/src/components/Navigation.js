import React, {useState} from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default () =>{

    const [ showLoginModal, setShowLoginModal ] = useState(false)
    const [ showRegisterModal, setShowRegisterModal ] = useState(false)

    const handleShowLoginModal = () =>{
        setShowLoginModal(true)
    }

    const handleHideLoginModal = () =>{
        setShowLoginModal(false)
    }

    const handleShowRegisterModal = () =>{
        setShowRegisterModal(true)
    }

    const handleHideRegisterModal = () =>{
        setShowRegisterModal(false)
    }
    
    return(
        <>
            <Navbar variant="dark" className="colour-nav">
                <Navbar.Brand>
                   <h5>Recruiter Review</h5> 
                </Navbar.Brand>


                <Nav className="ml-auto">

                    <Button variant="dark" 
                            className="mr-2"
                            onClick={handleShowLoginModal}
                    >
                        Iniciar sesión
                    </Button>

                    <Button variant="outline-light"
                            onClick={handleShowRegisterModal}
                    >
                        Registrarse
                    </Button>
                
                </Nav>

            </Navbar>

            <Login showLogin={showLoginModal} 
                   onHideLogin={handleHideLoginModal}
            />

            <Register showRegister={showRegisterModal}
                      onHideRegister={handleHideRegisterModal}            
            />
        </>
    )

}