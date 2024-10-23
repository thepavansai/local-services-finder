import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WelcomePopup from './WelcomePopup';

function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <WelcomePopup onClose={closePopup} />}
        <div className='homep'>
        <Link to="/login">Login</Link> | 
        <Link to="/signup">Signup</Link> | 
        <Link to="/add-service">Add an Entry</Link>
        </div>
    </div>
  );
}

export default Home;
