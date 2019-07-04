import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { UserContext, IsLoggedIn } from './UserContext';

import './App.css';
function App() {
  const [schools, setSchools] = useState([]);
  const [about, setAbout] = useState([]);
  const [loggedin, setLoggedIn] = useState(true);

  useEffect(() => {
    fetch('/schools')
      .then(res => res.json())
      .then(res => setSchools(res));

    fetch('/about')
      .then(res => res.json())
      .then(res => setAbout(res));
  }, []);

  return (
    <UserContext.Provider value={{ schools, about }}>
      <IsLoggedIn.Provider value={{ loggedin, setLoggedIn }}>
        <Route exact path="/:id" component={Header} />
        <Body />
        <Footer />
      </IsLoggedIn.Provider>
    </UserContext.Provider>
  );
}

export default App;
