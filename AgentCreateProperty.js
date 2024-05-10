// PropertyListPage.js

import React, { useState } from 'react';
import './App.css'; // Import CSS file

function App() {
  const [propertyInfo, setPropertyInfo] = useState({
    picture: '',
    information: '',
    location: '',
    bedroom: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle property submission
    console.log(propertyInfo);
  };

  const handleCancel = () => {
    // Logic to handle cancel button click
    setPropertyInfo({
      picture: '',
      information: '',
      location: '',
      bedroom: '',
      price: ''
    });
  };

  return (
    <div className="container">
      <h2>Create Property Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="picture">Property Picture:</label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="information">Information:</label>
          <textarea
            id="information"
            name="information"
            value={propertyInfo.information}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={propertyInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bedroom">Bedroom:</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            value={propertyInfo.bedroom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={propertyInfo.price}
            onChange={handleChange}
          />
        </div>
        <div className="buttons-container">
          <button type="submit" className="create-button">Create</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default App;