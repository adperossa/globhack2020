import React, {useState} from 'react';
import Modal from './Modal';
import {Form, Button} from 'react-bootstrap';

export default (props) =>{

    const [ userName, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    return(
        <>
            <Modal show={props.showRegister}
                   onHide={props.onHideRegister}
                   title='Registrate'
                   body={
                            <>
                                <Form>
                                    <Form.Group>
                                        
                                        <Form.Label>Ingrese su email</Form.Label>
                                        
                                        <Form.Control type="email"
                                                      placeholder="email@gmail.com"
                                                      onChange={e => setUsername(e.target.value)}
                                        />

                                    </Form.Group>

                                    <Form.Group>
                                        
                                        <Form.Label>Ingrese su contraseña</Form.Label>
                                        
                                        <Form.Control type="password"
                                                      placeholder="Contraseña"
                                                      onChange={e => setPassword(e.target.value)}
                                        />

                                    </Form.Group>
                                </Form>
                            </>
                        }
                   footer={
                            <Button>
                                Registrarse
                            </Button>
                          }
            />
        </>
    )

}