import React, { useState } from 'react';

function AddSchool() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [deptNum, setDeptNum] = useState('');
  const [description, setDescription] = useState('');
  function addSchoolHandler(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'location':
        setLocation(e.terget.value);
        break;
      case 'deptNum':
        setDeptNum(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'add-school-form':
        e.preventDefault();
        alert('I see You');
        break;
      default:
        break;
    }
  }

  return (
    <section id="section-two">
      <form
        onSubmit={addSchoolHandler}
        name="add-school-form"
        className="jumbotron-form"
      >
        <h1>Add School</h1>
        (Note: You can Update A School Only After Adding It To Our Database)
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={addSchoolHandler}
            placeholder="School Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={location}
            placeholder="School State Location"
          />
        </div>
        <div>
          <input
            type="number"
            name="deptNum"
            value={deptNum}
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
            placeholder="School Description "
          />
        </div>
        <button type="submit"> Search </button>
      </form>
    </section>
  );
}
export default AddSchool;
