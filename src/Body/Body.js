import React from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';
import 'react-icons/';

import UserContext from '../App';

import { Route } from 'react-router-dom';

function Body() {
  const { schools } = UserContext().props;
  console.log(schools);

  return (
    <>
      <Route
        exact
        path="/"
        render={renderProps => (
          <>
            <Jumbotron />
            <Welcome />
            <Popular {...{ schools }} />
          </>
        )}
      />
      <Route exact path="/about" render={renderProps => <Welcome />} />
    </>
  );
}

export default Body;
