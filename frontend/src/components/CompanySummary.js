import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Card, Dropdown } from 'react-bootstrap';

export default (props) =>{

    const [ companySummary, setCompanySummary ] = useState([])

    useEffect( () =>{

            fetch(`http://localhost:8080/companyReview?companyName=${props.companyName}`)

            .then(res => res.json())

            .then(data =>  setCompanySummary(data) ) 
    }, [])
    
    return(
        <>
            <Jumbotron className="m-4 colour-text">

                <h1 className="m-3">{companySummary.name}</h1>

                <Dropdown.Divider className="border-blue m-3" />

                <p className="lead m-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                
                <div className="d-flex justify-content-center">
                    <Card className="h5 m-4 p-4 border-blue">
                        Total : 5.10
                    </Card>

                    <Card className="h5 m-4 p-4 border-blue">
                        Ambiente : 3.6
                    </Card>

                    <Card className="h5 m-4 p-4 border-blue">
                        Feedback : 4.8
                    </Card>
                </div>

                <p className="text-right mt-5">
                    <Button className="button-orange">Calificá a esta empresa</Button>
                </p>
            </Jumbotron>
        </>
    )

}