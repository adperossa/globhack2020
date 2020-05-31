import React from 'react';
import CompanySummary from './CompanySummary';
import { Container, Card, CardDeck, Dropdown, Button } from 'react-bootstrap';
import StarRating from './StarRating';

export default (props) => {


  return (
      <div className="d-flex justify-content-center flex-wrap">

        {/* <CompanySummary /> */}

          {props.reviews.map(review => {

            return (

              <Card>
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.

                    {review.summary}

                    <ul className="ratingsList">
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
                </Card.Body>
                <Card.Footer className="text-right">
                  <Button className="button-orange">Dejá tu review</Button>
                </Card.Footer>
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