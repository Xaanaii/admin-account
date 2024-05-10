import React, { useState } from 'react';
import './searchAccount.css'; // Import CSS file
import { Link } from 'react-router-dom';

function SearchAccount() {
  const [searchResults, setSearchResults] = useState([]);
  const [accountName, setAccountName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`API_ENDPOINT_HERE?name=${accountName}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Search Users</h2>
      <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <label className="Account_Name">Account Name:</label>
          <input
            type="text"
            id="Account_Name"
            name="Account_Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            required
          />
          <button type="submit" name="search">Search</button>
        </form>
      </div>

      <div className="displayResult">
        {searchResults.length > 0 ? (
          <div className="searchResults">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No results found.</div>
        )}
      </div>

      <div className="buttons-container">
        <form method="post" name="logout">
          <button className="logOutButtonSearch" name="logout">Logout</button>
        </form>
        <Link to={"/userAccount"}><button className="back-button-search">Back</button></Link>
      </div>
    </div>
  );
}

export default SearchAccount;
