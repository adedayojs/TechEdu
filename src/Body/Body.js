import React, { useContext } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';
import 'react-icons/';

import { UserContext } from '../UserContext';

import { Route } from 'react-router-dom';

function Body() {
  const { schools, about } = useContext(UserContext);
  const text =
    'Below is a few list of institutions of which the major part is a popular mention. Feel free to scroll through.';
  const heading = 'Popular Insitution';
  const ourCore = 'Our Core';
  const coreText = 'These makes up who we are';
  return (
    <>
      <Route
        exact
        path="/"
        render={renderProps => (
          <>
            <Jumbotron />
            <Welcome />
            <Popular {...{ data: schools, heading, text }} />
          </>
        )}
      />
      <Route exact path="/about" render={renderProps => <Welcome />} />
      <Route
        exact
        path="/about"
        render={renderProps => (
          <Popular {...{ data: about, heading: ourCore, text: coreText }} />
        )}
      />
    </>
  );
}

export default Body;
