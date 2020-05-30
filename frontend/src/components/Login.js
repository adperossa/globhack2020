import React, { useState } from 'react';
import Modal from './Modal';
import { Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('');
  const [loginMsg, setLoginMsg] = useState('');

  const history = useHistory();


  const handleLogin = (ev) => {
    ev.preventDefault();

    setLoginMsg("Enviando credenciales...");

    fetch(`http://localhost:8080/login`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {

        if (data.success) {

          setLoginStatus("success");
          setLoginMsg(`Bienvenido, ${username}!`);
          props.setAuthState(true);

          setTimeout(() => {
            props.onHideLogin();
            history.push("/home");
          }, 2000);

        } else {

          setLoginStatus("danger");
          if (data.status === 401) {
            setLoginMsg("Usuario y/o contraseña incorrecta.")
          } else {
            setLoginMsg("Ocurrió un error.");
            console.error(`Error ${data.status}: ${data.message}`);
          }

        }
      })
      .catch(err => { setLoginStatus("Error en fetch"); }); // aca capturamos errores fuera de lo comun
  }

  return (
    <>
      <Modal show={props.showLogin}
        onHide={props.onHideLogin}
        title='Iniciar sesión'
        body={
          <>
            <Form id="loginForm" onSubmit={handleLogin}>
              <Form.Group>

                <Form.Label>Ingrese su email</Form.Label>

                <Form.Control type="email"
                              className="border-blue"
                              placeholder="email@gmail.com"
                              onChange={(e) => { setUsername(e.target.value) }}
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>Ingrese su contraseña</Form.Label>

                <Form.Control type="password"
                              className="border-blue"
                              placeholder="Contraseña"
                              onChange={(e) => { setPassword(e.target.value) }}
                />

              </Form.Group>

              <Alert variant={loginStatus}>
                {loginMsg}
              </Alert>

            </Form>
          </>
        }
        footer={
          <Button type="submit" 
                  form="loginForm"
                  className="button-green"
          >
            Iniciar sesión
          </Button>
        }
      />
    </>
  )

}