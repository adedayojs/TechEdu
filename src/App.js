import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

export const UserContext = React.createContext({});
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

function App() {
  document.title = 'TechEdu | Education Decision Platform';

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/schools')
      .then(res => res.json())
      .then(res => setSchools(res));
  }, []);
  return (
    <UserProvider {...{ schools }}>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
