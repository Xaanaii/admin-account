import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './suspendAccount.css'; 

function SuspendAccount() {
  const [selectedUser, setSelectedUser] = useState('');
  
  // Function to handle suspend user
  const handleSuspendUser = () => {
    if (!selectedUser) {
      alert("Please select a user to suspend");
      return;
    }
    // Lakukan logika untuk menangguhkan pengguna dengan selectedUser
    // Misalnya: fetch(`suspendUserEndpoint/${selectedUser}`, { method: 'POST' });
    alert(`User ${selectedUser} suspended successfully`);
  };

  // Function to handle select user
  const handleSelectUser = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div className='box'>
      <h2>User Suspension</h2>
      <div>
        <label>Select user to suspend:</label>
        <select value={selectedUser} onChange={handleSelectUser} required>
          <option value="">Select User</option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          {/* Tambahkan opsi pengguna lainnya di sini */}
        </select>
      </div>
      <div className="button-container">
        <button onClick={handleSuspendUser} className="suspend-button">Suspend User</button>
        <Link to={"/userAccount"}><button className="back-button">Back</button></Link>
      </div>
    </div>
  );
}

export default SuspendAccount;
