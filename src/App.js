import React, { useState, useEffect } from 'react';

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { UserContext } from './UserContext';

import { Route } from 'react-router-dom';

import './App.css';
const home ={}
function App() {
  const [schools, setSchools] = useState([]);
  const [about, setAbout] = useState([]);

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
    <Header />
      <Body />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
