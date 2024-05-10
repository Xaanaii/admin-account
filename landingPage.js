import React from 'react';

import './landingPage.css'
import { Link } from 'react-router-dom';


const Button = (props) => {
  return (
    <button
      className={`button ${props.variant}`} // Menggunakan template literal untuk menggabungkan kelas
      type="submit"
    >
      {props.children}
    </button>
  );
}

function LandingPage() {
  return (
    <div >
      <div className="buttons-wrapper">
        <div className="green-buttons">
      
          <div className="foto">
            <img src="Account.jpg"/>
            <Link to={"/userAccount"}><Button variant="green">User Account Feature</Button></Link>
          </div>

          <div className="pict">
            <img src="Profile.png"/>
            <Button variant="green">User Profile Feature</Button>
          </div>
        </div>
          <div className="red-button">
            <Button variant="red">Logout</Button>
          </div>
      </div>
    </div>
  );

  }
export default LandingPage;
