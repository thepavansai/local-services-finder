import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePopup({ onClose }) {
    const navigate=useNavigate();
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>Welcome to Local Service Finder</h1>
            <div className='popup-buttons'>
            <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Signup</button>
            <button onClick={onClose}>Skip</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;
