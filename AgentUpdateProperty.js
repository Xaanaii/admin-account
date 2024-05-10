// PropertyUpdatePage.js

import React, { useState } from 'react';
import './App.css'; // Import CSS file

const App = () => {
  const [availability, setAvailability] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  return (
    <div className="container">
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="propertyPicture">Property Picture:</label>
          <img src="path_to_property_picture" alt="Property" />
        </div>
        
        <div className="form-group">
          <label htmlFor="information">Information:</label>
          <textarea id="information" rows="4" disabled />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" disabled />
        </div>
        
        <div className="form-group">
          <label htmlFor="bedroom">Bedroom:</label>
          <input type="text" id="bedroom" disabled />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" disabled />
        </div>
        
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
          <select
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="available">Available</option>
            <option value="not_available">Not Available</option>
          </select>
        </div>

        <div className="buttons-container">
          <button type="submit" className="update-button">Update</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default App;
