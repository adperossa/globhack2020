import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

export default (props) => {

  return (

    <>

      <Navbar.Collapse className="justify-content-end mr-5">
        <Navbar.Text>
          Bienvenidx, {props.currentUser}!
        </Navbar.Text>
      </Navbar.Collapse>
      <Button variant="info"
        onClick={props.logout}
      >
        Cerrar sesión
      </Button>

    </>
  )
}