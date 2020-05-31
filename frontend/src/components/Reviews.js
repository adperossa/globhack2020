import React from 'react';
import CompanySummary from './CompanySummary';
import {Card, Dropdown, Button} from 'react-bootstrap';

export default (props) =>{

    
    return(
        <>
            <div className="d-flex justify-content-center flex-wrap">

                <CompanySummary />

                       
                        {props.reviews.map( review => {
                            
                            return ( 


                                <Card className="sombra colour-text m-3" style={{ width: '30rem' }}>

                                    <Card.Body>

                                        <Card.Title as="h5" className="mb-4 m-1">{review.companyName}</Card.Title>

                                        <Dropdown.Divider className="colour-divider m-2" />

                                            <Card.Text className="m-5">
                                                Ventajas y desventajas: {review.summary}

                                                <ul>
                                                    <li>Calificación del ambiente: {review.questionOne}</li>
                                                    <li>Calificación de feedback: {review.questionTwo}</li>
                                                    <li>Calificación de cv: {review.questionThree}</li>

                                                    <li>Calificación global: {review.average}</li>
                                                </ul>
                                            </Card.Text>

                                            <Dropdown.Divider className="colour-divider m-2" />

                                            <div className="text-right mt-5">
                                                <Button className="button-orange">Dejá tu review</Button>
                                            </div>

                                    </Card.Body>
   
                            </Card>


                         ) })}
                   

    

            </div>

        </>
    )

}