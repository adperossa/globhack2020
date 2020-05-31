import React, { useState } from 'react';
import Modal from './Modal';
import { Form, Button, Alert } from 'react-bootstrap';

export default (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');
  const [registerMsg, setRegisterMsg] = useState('');

  const cleanState = () => {
    setRegisterMsg("");
    setRegisterStatus("");
    setUsername("");
    setPassword("");
  }

  const handleRegister = (ev) => {
    ev.preventDefault();

    setRegisterMsg("Enviando credenciales...");

    fetch(`http://localhost:8080/register`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password, confirmPassword })
    })
      .then(res => res.json())
      .then(data => {

        if (data.success) {

          setRegisterStatus("success");
          setRegisterMsg(`Usuarix ${username} registrado exitosamente.`);

          setTimeout(() => {
            props.onHideRegister();
            cleanState();
          }, 2000);

        } else {

          setRegisterStatus("danger");
          if (data.status === 409) {
            setRegisterMsg("Las contraseñas no coinciden.")
          } else if (data.status === 403) {
            setRegisterMsg("Usuario y/o contraseña incorrecta.")
          } else {
            setRegisterMsg("Ocurrió un error.");
            console.error(`Error ${data.status}: ${data.message}`);
          }

          setTimeout(() => {
            cleanState();
          }, 4000);

        }
      })
      .catch(err => { setRegisterStatus("Error en fetch"); }); // aca capturamos errores fuera de lo comun
  }

  return (
    <>
      <Modal show={props.showRegister}
        onHide={props.onHideRegister}
        title='Registrate'
        body={
          <>
            <Form id="registerForm" onSubmit={handleRegister}>
              <Form.Group>

                <Form.Label>Ingrese su email</Form.Label>

                <Form.Control required type="email"
                                       className="border-blue"
                                       placeholder="email@gmail.com"
                                       onChange={e => setUsername(e.target.value)}
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>Ingrese su contraseña</Form.Label>

                <Form.Control required type="password"
                                       className="border-blue"
                                       placeholder="Contraseña"
                                       onChange={e => setPassword(e.target.value)}
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>Confirme su contraseña</Form.Label>

                <Form.Control required type="password"
                                       className="border-blue"
                                       placeholder="Confirmar contraseña"
                                       onChange={e => setConfirmPassword(e.target.value)}
                />

              </Form.Group>

              <Alert variant={registerStatus}>
                {registerMsg}
              </Alert>

            </Form>
          </>
        }
        footer={
          <Button type="submit" 
                  form="registerForm"
                  className="button-green"
            >
            Registrarse
          </Button>
        }
      />
    </>
  )

}