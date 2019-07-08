import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { IsLoggedIn } from '../../UserContext';
import Popular from '../Popular/Popular';
import './School.css';
import AddSchool from './AddSchool';

function School() {
  const { loggedIn } = useContext(IsLoggedIn);
  const [input, setInput] = useState('');
  const [schoolOption, setSchoolOption] = useState('');
  const [facultyOption, setFacultyOption] = useState('');

  function changeHandler(e) {
    switch (e.target.name) {
      case 'input':
        setInput(e.target.value);
        break;
      case 'school-options':
        setSchoolOption(e.target.value);
        break;
      case 'faculty-option':
        setFacultyOption(e.target.value);
        break;
      case 'search-school-form':
        e.preventDefault();
        alert('I see You');
        break;
      default:
        console.log('Nothing Found');
        break;
    }
  }
  const { schools } = useContext(UserContext);
  const text =
    'Below is a Comprehensive list of institutions of which the major part is a popular mention. Feel free to scroll through.';
  const heading = 'Insitutions In Our Library';
  return (
    <main id="school-page" className="flex">
      <section id="section-one">
        <form className="jumbotron-form school-search">
          <div>
            <input
              type="text"
              name="input"
              value={input}
              onChange={changeHandler}
              placeholder="Search course"
            />
            <select
              name="school-options"
              value={schoolOption}
              onChange={changeHandler}
            >
              <option value="">Select School</option>
              <option value="Others">Others</option>
              <option value="University Of Lagos">University Of Lagos</option>
              <option value="University Of Decagon">
                University Of Decagon
              </option>
              <option value="University Of Techkny">
                University Of Techkny
              </option>
            </select>
            <select
              name="faculty-option"
              value={facultyOption}
              onChange={changeHandler}
            >
              <option value="">Select Faculty</option>
              <option value="Others">Others</option>
              <option value="Arts">Arts</option>
              <option value="Engineering">Engineering</option>
              <option value="Business Administrataion">
                Business Administrataion
              </option>
              <option value="Sciences">Sciences</option>
              <option value="Social-Sciences">Social Sciences</option>
            </select>
            <button id="school-search" type="submit">
              Search
            </button>
          </div>
        </form>
        <Popular {...{ data: schools, heading, text }} />
      </section>

      {loggedIn || Boolean(localStorage.IsLoggedIn) ? <AddSchool /> : null}
    </main>
  );
}

export default School;
