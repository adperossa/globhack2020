import React from 'react';
import Modal from './Modal';
import {Form, Button} from 'react-bootstrap';

export default (props) =>{

    return(
        <>
            <Modal show={props.showLogin}
                   onHide={props.onHideLogin}
                   title='Iniciar sesión'
                   body={
                            <>
                                <Form>
                                    <Form.Group>
                                        
                                        <Form.Label>Ingrese su email</Form.Label>
                                        
                                        <Form.Control type="email"
                                                      placeholder="Email" 
                                        />

                                    </Form.Group>

                                    <Form.Group>
                                        
                                        <Form.Label>Ingrese su contraseña</Form.Label>
                                        
                                        <Form.Control type="password"
                                                      placeholder="Contraseña" 
                                        />

                                    </Form.Group>
                                </Form>
                            </>
                        }
                   footer={
                            <Button>
                                Iniciar sesión
                            </Button>
                          }
            />
        </>
    )

}