import React, {useState} from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';
import Login from './Login';

export default () =>{

    const [ showLoginModal, setShowLoginModal ] = useState(false)

    const handleShowLoginModal = () =>{
        setShowLoginModal(true)
    }

    const handleHideLoginModal = () =>{
        setShowLoginModal(false)
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

                    <Button variant="outline-light">Registrarse</Button>
                
                </Nav>

            </Navbar>

            <Login showLogin={showLoginModal} 
                   onHideLogin={handleHideLoginModal}
            />
        </>
    )

}