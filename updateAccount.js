// App.js

import React, { useState } from 'react';
import './updateAccount.css'; // Import CSS file
import { Link } from 'react-router-dom';

// Dummy data for username
const dummyUsernames = [
  { User_Id: '1', E_Name: 'John Doe' },
  { User_Id: '2', E_Name: 'Jane Smith' },
  { User_Id: '3', E_Name: 'Michael Johnson' },
  { User_Id: '4', E_Name: 'Emily Brown' },
];

function UpdateAccount() {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [newUserRole, setNewUserRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleLogout = () => {
    // Handle logout
  };

  return (
    <div>
      <h2>Update User Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="acctDropdown">Select User:</label>
          <select
            id="acctDropdown"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">Please select a user</option>
            {dummyUsernames.map(user => (
              <option key={user.User_Id} value={user.User_Id}>
                {user.E_Name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="new_user_role">Role:</label>
          <select
            id="new_user_role"
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            required
          >
            <option value="">Please select a role</option>
            <option value="system_admin">System Admin</option>
            <option value="real_estate_agent">Real Estate Agent</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className="button-container">
        <button className="updateButton" type="submit">Update</button>
        </div>
      </form>

      <div className="button-container">
        <form method="post" name="logout">
          <button className="logOutButton" name="logout">Logout</button>
        </form>
        <Link to={"/userAccount"}><button className="backButton">Back</button></Link>
      </div>
    </div>
  );
}

export default UpdateAccount;
