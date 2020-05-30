import React from 'react';
import {Form, Button, Card, Dropdown} from 'react-bootstrap';

export default () =>{

    return(
        <>
        <div className="d-flex justify-content-center">
            <Card className="colour-text sombra">

                <Card.Body className="m-5">

                    <h1 className="mb-5">Contanos que te pareció la entrevista</h1>

                    <p className="mb-5">¡Solo toma un minuto! Tu evaluación compartida de forma anónima ayudará a otras personas que buscan empleo.</p>

                    <Form>

                        <Form.Group className="mb-5">
                            <Form.Label>Nombre de la empresa a la cual queres hacerle la review</Form.Label>
                            <Form.Control type="text" 
                                        className="border-blue"
                                        placeholder="Nombre de la empresa" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>Contanos lo que te parecio la entrevista y como te sentiste</Form.Label>
                            <Form.Control as="textarea" 
                                        rows="2" 
                                        placeholder="Contranos las ventajas y las desventajas"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Del 1 al 5 </Form.Label>
                            <div>
                                <Form.Check inline
                                    type="radio"
                                    label="1"
                                    name="1"
                                    value="1"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="2" 
                                    name="1"
                                    value="2"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="3"
                                    name="1"
                                    value="3"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="4"
                                    name="1"
                                    value="4"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="5"
                                    name="1"
                                    value="5"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Del 1 al 5 que tan satisfactoria fue la entrevista</Form.Label>
                            <div>
                                <Form.Check inline
                                    type="radio"
                                    label="1"
                                    name="1"
                                    value="1"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="2" 
                                    name="1"
                                    value="2"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="3"
                                    name="1"
                                    value="3"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="4"
                                    name="1"
                                    value="4"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="5"
                                    name="1"
                                    value="5"
                                />
                            </div>
                        </Form.Group>

                    </Form>

                </Card.Body>

                <Card.Footer className="text-right">
                    <Button className="button-orange"
                    >
                        Enviar
                    </Button>
                </Card.Footer>
            
            </Card>
        </div>
        </>
    )

}