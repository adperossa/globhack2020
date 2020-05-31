import React, {useEffect, useState} from 'react';
import {Card, Dropdown, Button} from 'react-bootstrap';

export default () =>{

    const [ reviews, setReviews ] = useState([])

    console.log(reviews)

    useEffect( () => {
            fetch(`http://localhost:8080/api/companies`, {
            
            })
            .then( res => res.json())
            .then( res => setReviews(res)
                    
            )
           }   , []
     );


    

    return(
        <>
            <div className="d-flex justify-content-center flex-wrap">

                <Card className="sombra colour-text m-3" style={{ width: '30rem' }}>
                    <Card.Body>

                        <Card.Title as="h5" className="mb-4 m-1">Empresa</Card.Title>

                        <Dropdown.Divider className="colour-divider m-2" />

                        <Card.Text className="m-5">
                            Textarea

                            <ul>
                                <li>Pregunta uno</li>
                                <li>Pregunta dos</li>
                                <li>Pregunta tres</li>
                            </ul>
                        </Card.Text>

                        <Dropdown.Divider className="colour-divider m-2" />

                        <div className="text-right mt-5">
                            <Button className="button-orange">Dejá tu review</Button>
                        </div>

                    </Card.Body>
                </Card>

            </div>

        </>
    )

}