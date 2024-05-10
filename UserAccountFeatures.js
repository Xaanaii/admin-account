import React from 'react';
import './UserAccoutFeatures.css'; // Import CSS file
import { Link } from 'react-router-dom';

function UserAccount() {  
// Function to handle going back

  return (
    <div>

<div className="UserAcctFeat">
  <div className="AcctFeat">
    <Link to="/createUser">
      <img src="CreateUser.png" alt="Create User"/>
    </Link>
    <p>Create User</p>
  </div>

  <div className="AcctFeat">
    <Link to="/viewAccount">
      <img src="ViewUser.jpg" alt="View User"/>
    </Link>
    <p>View User</p>
  </div>

  <div className="AcctFeat">
    <Link to="/SearchAccount">
      <img src="SearchUser.png" alt="Search User"/>
    </Link>
    <p>Search User</p>
  </div>

  <div className="AcctFeat">
    <Link to="/suspendAccount">
      <img src="suspendUser.jpeg" alt="Suspend User"/>
    </Link>
    <p>Suspend User</p>
  </div>

  <div className="AcctFeat">
    <Link to="/updateAccount">
      <img src="UpdateUser.png" alt="Update User"/>
    </Link>
    <p>Update User</p>
  </div>
</div>


      <div className="buttons-container">
        <button className="logOutController" name="logout">Logout</button>
        <Link to={"/"}><button className="go-back-button">Back</button></Link>
      </div>
    </div>
  );  
}

export default UserAccount;
