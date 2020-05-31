import React from 'react';
import CompanySummary from './CompanySummary';
import { Card, Dropdown, Button } from 'react-bootstrap';
import StarRating from './StarRating';

export default (props) => {


  return (
      <div className="d-flex justify-content-center flex-wrap">

        <CompanySummary />

          {props.reviews.map(review => {

            return (

              <Card className="sombra colour-text m-3 p-4" style={{ width: '30rem' }}>
                <Card.Body>

                  <Card.Text>
                    <p className="mb-4 lead">
                      {review.summary}
                    </p>
                    

                    <Dropdown.Divider className="colour-divider m-3" />

                    <ul className="ratingsList mt-5 mb-5">

                      <div className="ratingItem">
                        <li>Calificación del ambiente: </li><StarRating rating={review.questionOne} />
                      </div>

                      <div className="ratingItem">
                        <li>Calificación de feedback: </li><StarRating rating={review.questionTwo} />
                      </div>

                      <div className="ratingItem">
                        <li>Calificación de cv: </li><StarRating rating={review.questionThree} />
                      </div>

                      <div className="ratingItem">
                        <li>Calificación global: </li><StarRating rating={review.average} />
                      </div>

                    </ul>

                  </Card.Text>

                  <Dropdown.Divider className="colour-divider m-3" />

                  <div className="text-right mt-4">
                    <Button className="button-orange">Dejá tu review</Button>
                  </div>

                </Card.Body>                
              </Card>








            )
          }

          )}


      </div>

  )

}

      {/* <Card className="sombra colour-text m-3" style={{ width: '25em' }}>

  <Card.Body>

    <Card.Text>
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

</Card> */}