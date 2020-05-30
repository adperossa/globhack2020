import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Title from './Title'

export default () => {
  return (
    <>
      <Container>
        <Title />
      </Container>

      <Jumbotron fluid className="home-banner">
        <Container>
          <h1>Enviá tu Review!</h1>
          <p className="lead">
            Tu aporte puede hacer mucho por mejorar la experiencia de reclutamiento para todxs.
            Animate!
          </p>
        </Container>
      </Jumbotron>
    </>
  )
}