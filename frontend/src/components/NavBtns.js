import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  return (
    
    <>
      <Button variant="dark"
        className="mr-2"
        onClick={props.handleShowLoginModal}
      >
        Iniciar sesión
      </Button>

      <Button variant="outline-light"
        onClick={props.handleShowRegisterModal}
      >
        Registrarse
      </Button>
    </>
  )
}