import React from 'react';
import {Form, Button, Card, Dropdown} from 'react-bootstrap';

export default () =>{

    return(
        <>
        <div className="d-flex justify-content-center align-items-start m-4">
            <Card className="colour-text sombra">

                <Card.Body className="m-5">

                    <h1 className="mb-5">Contanos que te pareció la entrevista</h1>


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

                            <Form.Label>
                                En una escala del 1 al 5, siendo 1 "Muy inhóspito" y 5 "Muy buena acogida" <br/>
                                ¿cómo calificarías el lugar de recepción y entrevista era ameno y relajado?
                            </Form.Label>

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

                            <Form.Label>
                                En una escala del 1 al 5, <br/>
                                ¿qué tan cómodo y relajado te sentiste en la recepción y la entrevista?
                            </Form.Label>

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

                            <Form.Label>
                                ¿Te preguntaron por los datos y elementos que figuran en tu Curriculum Vitae?
                            </Form.Label>

                            <div>
                                <Form.Check inline
                                    type="radio"
                                    label="Nada"
                                    name="1"
                                    value="1"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="Poco" 
                                    name="1"
                                    value="2"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="Algo"
                                    name="1"
                                    value="3"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="Bastante"
                                    name="1"
                                    value="4"
                                />
                                <Form.Check inline
                                    type="radio"
                                    label="Mucho"
                                    name="1"
                                    value="5"
                                />
                            </div>
                        </Form.Group>

                    </Form>

                    <p className="mt-5 h5">¡Gracias por brindar tu experiencia!</p>

                </Card.Body>

                <Card.Footer className="text-right">
                    <Button className="button-orange"
                    >
                        Enviar evaluación
                    </Button>
                </Card.Footer>
            
            </Card>

            <Card className="p-4 ml-3 sombra colour-text" style={{ width: '18rem' }}>

                <p className="h5 mb-3">
                    Calificá una empresa en base a tu experiencia.
                </p>

                <p>
                    Tu evaluación  será compartida de forma anónima
                    y ayudará a otras personas que buscan empleo.
                </p>

                <Dropdown.Divider className="border-blue m-3"/>

                <footer className="blockquote-footer mt-3">

                    Por favor seguí las Normas de la comunidad y no publiques:

                    <ul>
                        <li>Lenguaje agresivo o discriminatorio</li>
                        <li>No menciones a nadie por su nombre o cargo específico</li>
                        <li>No escribas contenido agresivo o discriminatorio</li>
                        <li>No compartas secretos comerciales/información confidencial</li>
                    </ul>

                    ¡Gracias por poner de tu parte para mantener Recruiter Reviews!

                </footer>

            </Card>
        </div>
        </>
    )

}