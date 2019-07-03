import React from 'react';

import './Popular.css';

import UserContext from '../../App';

function Welcome({ schools }) {
  return (
    <section id="popular" className="flex-column main-center cross-center">
      <div className="welcome-heading">
        <h1>Popular Insitution</h1>
        <p className="welcome-text">
          Below is a few list of institutions of which the major part is a
          popular mention. Feel free to scroll through.
        </p>
      </div>
      <div className="flex space-between welcome-items popular-items">
        {schools.map(school => (
          <div className="popular-div" key={school.id}>
            <img
              className="popular-image"
              src={school.icon}
              alt={school.description}
            />
            <h3 className="school">{school.name}</h3>
            <p className="school-detail">
              {school.description.slice(0, 250) + '......'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Welcome;
