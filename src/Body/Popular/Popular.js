import React from 'react';

import './Popular.css';
import unilag from '../../images/unilag.webp';
import decagon from '../../images/decadev.jpg';
import pti from '../../images/main-campus.png';

function Welcome() {
  const labels = [
    'Unilag',
    'Petroleum Training Institute',
    'Decagon Institute'
  ];

  const details = [
    'Founded in 1962, the University of Lagos has, for over 5 decades, provided qualitative and research-oriented education to Nigerians and all those who have entered its domain in search of knowledge. The University has built a legacy of excellence and has been instrumental in the production of top range graduates and academia who have had tremendous impact, directly or indirectly, on growth and development in Nigeria..',
    'The Petroleum Training Institute is a specialized Institution with a mandate to train indigenous manpower to meet the technical and administrative demands. of the oil and gas and other allied industries in Nigeria and Africa. Organizations and Individuals have the opportunity to choose from a training bouquet of',
    'Decagon is a software engineering institute ushering in a new phase of tech-powered growth and prosperity in Nigeria by training and deploying an army of leader-developers. With a project-based curriculum, agile delivery methodology, mentor matching, and leadership modules, we transform any fast learner into a world-class software developer in just six months..',
    'As they say the first is always the best. TechEdu is the first of it kind and as such we are best at that which we know how to do best.',
    'Our constant update system ensure that we can boast of a wide coverage of Data makes sure that there is very minimal chance that you dont get what you are her for.'
  ];
  const image = [unilag, pti, decagon];
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
        {labels.map((label, index) => (
          <div className="popular-div" key={label}>
            <img className="popular-image" src={image[index]} alt={label} />
            <h3 className="school">{label}</h3>
            <p className="school-detail">
              {details[index].slice(0, 250) + '......'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Welcome;
