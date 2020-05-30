// Library dependencies
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components and styles
import '../css/App.css';
import Navigation from './Navigation';
import FormReview from './FormReview';
import Search from './Search';
import UserHome from './UserHome';
import Landing from './Landing';



export default function App() {
  return (

    <Router>

      <Navigation />

      <Switch>
        <Route path="/submit" children={<FormReview />} />
        <Route path="/search" children={<Search />} />
        <Route path="/home" children={<UserHome />} />
        <Route path="/" children={<Landing />} />
      </Switch>


    </Router>
  );
}