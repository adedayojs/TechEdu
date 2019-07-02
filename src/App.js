import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  document.title = 'TechEdu | Education Decision Platform'
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  );
}

export default App;
