import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WelcomePopup from './WelcomePopup';
import Navbar from './Navbar';
import axios from 'axios';

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [pinCode, setPinCode] = useState('');
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasVisited', 'true');
  };

  const searchService = () => {
    axios.get(`http://localhost:5000/services/pin?pinCode=${pinCode}`)
      .then(response => {
        if (response.data.length === 0) {
          setError("No Services Found");
        } else {
          setServices(response.data);
          setError('');
        }
      })
      .catch(error => {
        setError("Error Fetching data: " + error.message);
        console.error("Error fetching pin code:", error);
      });
  };

  return (
    <center>
      <div>
        <h1>Local Services Finder</h1>
        <div className='homep'>
          <Navbar />
        </div>
        {showPopup && <WelcomePopup onClose={closePopup} />}
        <div className='search-item'>
          <input 
            type='text' 
            value={pinCode} 
            onChange={e => setPinCode(e.target.value)}
            placeholder='Enter Pincode'
          /><br/>
          <button onClick={searchService}>Search</button>
        </div>
      </div>
      <div className='display'>
        {error && <div className="error-message">{error}</div>}
        <ul>
          {services.map(service => (
            <li key={service._id}>
              Service Name: {service.name}<br/>
              Rating: {service.rating} Type: {service.type}<br/>
              Contact: {service.contact}<br/>
              Pincode: {service.pinCode}
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
}

export default Home;
