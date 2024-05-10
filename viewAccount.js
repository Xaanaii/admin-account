import React, { useState, useEffect } from 'react';
import './viewAccount.css'; // Import CSS file
import { Link } from 'react-router-dom';

function ViewAccount() {
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    // Call for Viewing
    fetchUserAccounts();
  }, []);

  const fetchUserAccounts = async () => {
    try {
      const response = await fetch('../UserAccount/ViewAcctController.php');
      const data = await response.json();
      setUserAccounts(data);
    } catch (error) {
      console.error('Error fetching user accounts:', error);
    }
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await fetch('LogoutController.php', { method: 'POST' });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>User Account List</h2>
      <div className="displayAcctResult">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>License Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userAccounts.map((userAcct, index) => (
              <tr key={index}>
                <td>{userAcct.User_Id}</td>
                <td>{userAcct.user_Name}</td>
                <td>{userAcct.email}</td>
                <td>{userAcct.license_Id}</td>
                <td>{userAcct.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttons-container">
        <form method="post" name="logout" onSubmit={handleLogout}>
          <button className="logOutButtonView" type="submit" name="logout">Logout</button>
        </form>
        <Link to={"/userAccount"}><button className="back-button-view">Back</button></Link>
      </div>
    </div>
  );
}

export default ViewAccount;
