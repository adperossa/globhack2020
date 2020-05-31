import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Reviews from './Reviews';

export default (props) => {

  let hasResults;

  const location = useLocation();
  const results = location.state.results;
  const query = location.state.query;

  console.log(results);
  console.log(query);

  if (results.success) {
    hasResults = true;
  } else {
    hasResults = false;
  }

  return (
    <Container>
    { hasResults ? (
      
      <Reviews companyName={query} results={results} />

    ) : (

      <h1>No se encontraron resultados.</h1>

    )
      
    }
    </Container>
  )
}