import React from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';
import 'react-icons/';

function Body() {
  return (
    <>
      <Jumbotron />
      <Welcome />
      <Popular />
    </>
  );
}

export default Body;
