// Library dependencies
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

// Components and styles
import '../css/App.css';
import Title from './Title';
import Navigation from './Navigation';



export default function App() {
  return (

    <>

        <Navigation />

        <Container>
          <Title />
        </Container>

    </>
  );
}