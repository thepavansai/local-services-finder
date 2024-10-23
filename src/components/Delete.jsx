import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Delete.css'
function Delete() {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const[ res, setRes]=useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios.get('http://localhost:5000/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
      
  };

  const deleteServiceByName = () => {
    if (!serviceName) {
      setError('Service name is required!');
      return;
    }

    const serviceToDelete = services.find(service => service.name.toLowerCase() === serviceName.toLowerCase());

    if (!serviceToDelete) {
      setError('Service not found!');
      return;
    }

    axios.delete(`http://localhost:5000/services/name?name=${serviceName}`)
      .then(response => {
        setServices(services.filter(service => service._id !== serviceToDelete._id));
        setRes(serviceName+"Deleted Sucessfully");
        setServiceName('');
        setError('');
        
      })
      .catch(error => {
        setError('Error deleting service: ' + error.message);
        console.error('Error deleting service:', error);
      });
    };
  return (
    <center>
    <div className="container">
      <h1>Delete a Service</h1>
      {error && <div className="error-message">{error}</div>}
      {res && <div className='error-message'>{res}</div>}
      <div className="form-group">
        <input 
          type="text" 
          value={serviceName} 
          onChange={e => setServiceName(e.target.value)} 
          placeholder="Enter Service Name" 
        /><br/>
        <button onClick={deleteServiceByName}>Delete Service</button>
      </div>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <div className="service-content">
              <strong>Service Name:</strong> {service.name}<br/>
              <strong>Rating:</strong> {service.rating}  <strong>Type:</strong> {service.type}<br/>
              <strong>Contact:</strong> {service.contact}<br/>
              <strong>Pin Code:</strong> {service.pinCode}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </center>
   );
}

export default Delete;
