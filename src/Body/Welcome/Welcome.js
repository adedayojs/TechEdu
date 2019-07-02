import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';
import { FiGlobe, FiZap } from 'react-icons/fi';
import { GiPrivateFirstClass } from 'react-icons/gi';
import './Welcome.css';

function Welcome() {
  const labels = ['Free', 'Fast', 'Reliable', 'First', 'Wide'];
  const icons = [
    <MdMoneyOff />,
    <FiZap />,
    <FaUserCheck />,
    <GiPrivateFirstClass />,
    <FiGlobe />
  ];
  const details = [
    'TechEdu Is a free to use service targeted towards the general masses, of all classes, this ensures that no one is left out and denied quality education.',
    'TechEdu ia very fast and scalable to use, Our Servers make sure that you have all info you need right on time.',
    'Our strict algorithms and update protocols makes sure that you get original and reliable information, so be rest assured that you have reliable data.',
    'As they say the first is always the best. TechEdu is the first of it kind and as such we are best at that which we know how to do best.',
    'Our constant update system ensure that we can boast of a wide coverage of Data makes sure that there is very minimal chance that you dont get what you are her for.'
  ];
  return (
    <section id="welcome" className="flex-column main-center cross-center">
      <div>
        <h1>Welcome To TechEdu</h1>
        <p className='welcome-text'>
          An Inexahustible E-Guide system built to tailor the needs of
          prospective student and existing student alike with respect to
          discovering suitable institutions for suitable purpose(s)
        </p>
      </div>
      <div className="flex space-between welcome-items">
        {labels.map((label, index) => (
          <div key={label}>
            {icons[index]}
            <h3>{label}</h3>
            <p>{details[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Welcome;
