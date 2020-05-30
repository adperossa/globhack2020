import React, { useState } from 'react';
import Modal from './Modal';
import { Form, Button, Alert } from 'react-bootstrap';

export default (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('');
  const [loginMsg, setLoginMsg] = useState('');


  const handleLogin = (ev) => {
    ev.preventDefault();

    setLoginMsg("Enviando credenciales...");

    fetch(`http://localhost:8080/login`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password, confirmPassword: password })
    })
      .then(res => {

        if (res.ok) {

          setLoginStatus("success");
          setLoginMsg(`Bienvenido, ${username}!`);
          setTimeout(() => {
            props.onHideLogin();
          }, 2000);

        } else {

          setLoginStatus("danger");
          if (res.status === 401) {
            setLoginMsg("Usuario y/o contraseña incorrecta.")
          } else {
            setLoginMsg("Ocurrió un error.");
            console.error(`Error ${res.status}: ${res.statusText}`);
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
            <Form id="loginForm" onSubmit="handleLogin">
              <Form.Group>

                <Form.Label>Ingrese su email</Form.Label>

                <Form.Control type="email"
                  placeholder="email@gmail.com"
                  onChange={(e) => { setUsername(e.target.value) }}
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>Ingrese su contraseña</Form.Label>

                <Form.Control type="password"
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
          <Button type="submit" form="loginForm">
            Iniciar sesión
          </Button>
        }
      />
    </>
  )

}