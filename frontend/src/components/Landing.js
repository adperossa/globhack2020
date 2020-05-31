import React from 'react';
import { Container } from 'react-bootstrap';
import Title from './Title';
import SearchForm from './SearchForm';

export default () => {
  return (
    <Container fluid className="home-container">
      <Title />
      <SearchForm className="mt-5" />
    </Container>
  )
}