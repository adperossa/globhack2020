import React from 'react';
import {Navbar, Button, Nav} from 'react-bootstrap';

export default () =>{
    
    return(
        <>
            <Navbar variant="dark" className="colour-nav">
                <Navbar.Brand>
                   <h5>Recruiter Review</h5> 
                </Navbar.Brand>

                <Nav className="ml-auto">

                    <Button variant="dark" className="mr-2">Iniciar sesión</Button>

                    <Button variant="outline-light">Registrarse</Button>
                
                </Nav>

            </Navbar>
        </>
    )

}