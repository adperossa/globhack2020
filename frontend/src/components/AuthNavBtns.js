import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {

  return (
    
    <>
    
      <Button variant="info"
        onClick={() => props.setAuthState(false)}
      >
        Cerrar sesión
      </Button>

    </>
  )
}