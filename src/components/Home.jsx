import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WelcomePopup from './WelcomePopup';
import Navbar from './Navbar';
import axios from 'axios';

function Home() {
  /*
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
    }
  }, []);
  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasVisited', 'true');
  };
  // {showPopup && <WelcomePopup onClose={closePopup} />}
  */
  const [pinCode,setPinCode]=useState('');
  const [services ,setServices]=useState([]);
  const [error ,setError]=useState('');
  const searchservice=()=>{
    axios.get(`http://localhost:5000/services/pin?pinCode=${pinCode}`)
    .then(response =>{
      if(response.data.length==0){
        setError("No Services Found");}
        else{
          setServices(response.data)
        setError('')}
        //console.log('Response data:', response.data)
  })
    .catch(error=>{
      setError("Error Fetching data ,"+error.message)
      console.error("Error fetching pincode ")})
  };

  return (
    <center>
      <div>
        <h1>Local Services Finder</h1>
        <div className='homep'>
          <Navbar />
        </div>
        <div className='search-item'>
          <input type='text' value={pinCode} onChange={e=>setPinCode(e.target.value)}
          placeholder='Enter Pincode'/><br></br>
          <button onClick={searchservice}>Search</button>
        </div>
      </div>
      <div className='display'>
      {error && <div className="error-message">{error}</div>}
      <ul>{services.map(service=>(<li key={service._id}> Service Name:
          {service.name}<br></br>Rating: {service.rating}  Type: {service.type}<br></br>Contact:{service.contact} <br></br>
          Pincode:{service.pinCode}
           </li>))}</ul>
      </div>
    </center>
  );
}

export default Home;
