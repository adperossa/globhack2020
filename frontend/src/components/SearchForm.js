import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default () => {

  const [inputSearch, setInputSearch] = useState("");
  
  let history = useHistory();

  async function handleSubmit (e) {
    const results = await (await fetch(`http://localhost:8080/companyReview?companyName=${inputSearch}`)).json();
    let query = inputSearch;
    
    history.push({
      pathname: "/search",
      search: `?query=${query}`,
      state: { results }
    })
    // console.log(results);
  }


  return (
    <div className="d-flex justify-content-center mt-5 search-form">

      <div className="input-group mb-3" style={{ width: '30rem' }}>

        <Form.Control 
          size="lg" 
          type="text" 
          placeholder="Buscá por empresa" 
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
           />

        <div className="input-group-append">
          <Button onClick={handleSubmit} className="button-green">Buscar</Button>
        </div>

      </div>

    </div>
  )

}