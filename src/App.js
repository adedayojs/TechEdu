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
  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/schools')
      .then(res => res.json())
      .then(res => setSchools(res));

    fetch('/about')
      .then(res => res.json())
      .then(res => setAbout(res));
  }, []);

  return (
    /*  Wrap the entire app with two context provider one to access the fetched data
    the second to make the login status of the person accessible to the header,
    which is rendered accross all pages. 
    Basically authentication is done in the header, with the help of a state which is passed
     accross your pages with the context api.
    */
    <UserContext.Provider value={{ schools, about }}>
      <IsLoggedIn.Provider value={{ loggedin, setLoggedIn }}>
        <Route  path="/:id" component={Header} />
        <Body />
        <Footer />
      </IsLoggedIn.Provider>
    </UserContext.Provider>
  );
}

export default App;
