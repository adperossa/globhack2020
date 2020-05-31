import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Reviews from './Reviews';

export default (props) => {

  let hasResults;

  const location = useLocation();
  const { results } = location.state;

  if (results.success) {
    hasResults = false;
  } else {
    hasResults = true;
  }

  return (
    <Container>
    { hasResults ? (
      
      <Reviews reviews={results} />

    ) : (

      <h1>No se encontraron resultados.</h1>

    )
      
    }
    </Container>
  )
}