import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default () => {

  return (
    <div className="d-flex justify-content-center mt-5 search-form">

      <div className="input-group mb-3" style={{ width: '30rem' }}>

        <Form.Control size="lg" type="text" placeholder="Buscá por empresa" />

        <div className="input-group-append">
          <Button className="button-green">Buscar</Button>
        </div>

      </div>

    </div>
  )

}