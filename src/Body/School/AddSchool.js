import React, { useState } from 'react';
import ky from 'ky';

function AddSchool() {
  const [schoolName, setSchoolName] = useState('');
  const [location, setLocation] = useState('');
  const [deptNum, setDeptNum] = useState(0);
  const [description, setDescription] = useState('');

  function addSchoolHandler(e) {
    console.log('This function was called');
    e.preventDefault();
    console.log(e.target);

    switch (e.target.name) {
      case 'name':
        setSchoolName(e.target.value);
        break;
      case 'location':
        setLocation(e.target.value);
        break;
      case 'deptNum':
        setDeptNum(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'form':
        console.log('Submtteed');

        document.querySelector('#spinner').style.display = 'block'; // Display Your Spinner
        let data;
        ky('/schools', {
          method: 'post',
          json: {
            ...data
          }
        })
          .then(res => res.json())
          .then(res => {
            document.querySelector('#spinner').style.display = 'none'; // Display Your Spinner
            if (JSON.stringify(res) === JSON.stringify(data)) {
              document.querySelector('#right').style.display = 'block';
              // setTimeout(() => setRedirect(true), 2000);
            }
          })
          .catch(err => {
            document.querySelector('#spinner').style.display = 'none'; // Display Your Spinner
            document.querySelector('#wrong').style.display = 'block'; // Display Your Spinner
            console.log(err);
          });
        break;
      default:
        break;
    }
  }

  return (
    <section id="section-two">
      <form name="form" onSubmit={addSchoolHandler} className="jumbotron-form">
        <h1>Add School</h1>
        (Note: You can Update A School Only After Adding It To Our Database)
        <div>
          <input
            type="text"
            name="name"
            value={schoolName}
            onChange={addSchoolHandler}
            placeholder="School Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={location}
            onChange={addSchoolHandler}
            placeholder="School State Location"
          />
        </div>
        <div>
          <input
            type="number"
            name="deptNum"
            value={deptNum}
            onChange={addSchoolHandler}
            placeholder="Number Of Departments"
          />
        </div>
        <div>
          <input type="radio" name="status" id="status1" />
          <label htmlFor="status1">Federal</label>
          <input type="radio" name="status" id="status2" />
          <label htmlFor="status2">State</label>
        </div>
        <div>
          <textarea
            type="textarea"
            name="description"
            value={description}
            onChange={addSchoolHandler}
            placeholder="School Description "
          />
        </div>
        <button type="submit"> Search </button>
      </form>
    </section>
  );
}
export default AddSchool;
