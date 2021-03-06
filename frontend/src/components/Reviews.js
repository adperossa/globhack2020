import React from 'react';
import CompanySummary from './CompanySummary';
import { Card, Dropdown, Button } from 'react-bootstrap';
import StarRating from './StarRating';

export default (props) => {




  return (
      <div className="d-flex justify-content-center flex-wrap">

        <CompanySummary companyName={props.companyName} company={props.results.company} />

          {props.results.reviews.map(review => {
            
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
                          <li>Profesionalismo y respeto: </li><StarRating rating={review.questionOne} />
                        </div>

                        <div className="ratingItem">
                          <li>Feedback: </li><StarRating rating={review.questionTwo} />
                        </div>

                        <div className="ratingItem">
                          <li>Políticas de inclusión: </li><StarRating rating={review.questionThree} />
                        </div>

                        <div className="ratingItem">
                          <li>Calificación general: </li><StarRating rating={review.average} />
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