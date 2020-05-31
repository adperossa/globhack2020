import React from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default (props) => {

  const history = useHistory();

  return (
    <>
      <Button className="mr-1" size="sm" onClick={() => props.setAuthState(true)}>
        DEBUG: FORZAR LOGIN
      </Button>

      <DropdownButton size="sm" id="dropdown-item-button" title="Navegar a...">
        <Dropdown.Item as="button" onClick={() => history.push("/")}>Landing (no logueado)</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => history.push("/home")}>User Home (logueado)</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => history.push("/submit")}>Submit</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => history.push("/search")}>Search</Dropdown.Item>
      </DropdownButton>
    </>

  )
}