import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
  return (
    <section className="flex-column main-center cross-center">
      <h1>The Ultimate Education Guide</h1>

      <form className='jumbotron-form flex'>
        <div>
          <input type="text" placeholder="Search Keyword" />
          <select>
            <option value="">Select School</option>
            <option value="University Of Lagos">University Of Lagos</option>
            <option value="University Of Decagon">University Of Decagon</option>
            <option value="University Of Techkny">University Of Techkny</option>
          </select>{' '}
          <select>
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronic Engineering">Electronic Engineering</option>
            <option value="Business Administrataion">Business Administrataion</option>
          </select>
        </div>
        <button type="submit"> Search </button>
      </form>
    </section>
  );
}

export default Jumbotron;
