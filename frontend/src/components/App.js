// Library dependencies
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Components and styles
import '../css/App.css';
import Navigation from './Navigation';
import FormReview from './FormReview';
import Search from './Search';
import UserHome from './UserHome';
import Landing from './Landing';
import RankingCompany from './RankingCompany';



export default function App() {

  // Flag global de sesión
  const [logged, setLogged] = useState(false);

  return (

    <Router>

      <Navigation setAuthState={setLogged} isLogged={logged} />

      <Switch>

        <Route path="/submit">
          {logged ? (
            <FormReview />
          ) : (
              <Redirect to="/" />
          )
          }
        </Route>

        <Route path="/search">

          <Search />

          {/* {logged ? (
            <Search />
          ) : (
              <Redirect to="/" />
          )
          } */}

        </Route>

        <Route path="/home">
          {logged ? (
            <UserHome />
          ) : (
              <Redirect to="/" />
          )
          }
        </Route>

        <Route exact path="/">
            { 
              <>
                <Landing />
                <RankingCompany />
              </>
            }
        </Route>

      </Switch>


    </Router>
  );
}