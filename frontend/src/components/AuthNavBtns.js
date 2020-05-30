import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {

  return (
    
    <>
    
      <Button variant="outline-light"
        onClick={() => props.setAuthState(false)}
      >
        Cerrar sesión
      </Button>

    </>
  )
}