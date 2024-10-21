import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App(){
  const [services,setServices]=useState([]);
  const [name,setName]= useState('');
  const [type,setType]= useState('');
  const [rating,setRating]=useState('');
  const [contact,setContact]= useState('');
  const [pinCode,setPinCode]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:5000/services')
    .then(response=>setServices(response.data))
    .catch(error=>console.error(error));
  },[])
  
  //addService function
  const addService=()=>{
    axios.post('http://localhost:5000/services',{name, type, rating,contact})
    .then(response=>setServices([...services , response.data]))
    .catch(error=>console.error(error)) 
    console.log({name,type,rating,contact})
  }
  //Rendering
  return(
    <><center>
      <h1>Local Service Finder</h1>
      <div className="inputarea">
        <input type='text' value={name} onChange={(e=>setName(e.target.value))} placeholder="Service Name"/><br></br>
        <input type='text' value={type} onChange={e=>setType(e.target.value)} placeholder="Service type"/><br></br>
        <input type='number' value={rating} onChange={e=>setRating(e.target.value)} placeholder="Rating out of 5 starts" /><br></br>
        <input type='text' value={contact} onChange={e=>setContact(e.target.value)} placeholder="Conact Details"/><br></br>
        <input type='text' value={pinCode} onChange={e=>setPinCode(e.target.value)} placeholder='Enter Pincode'/>
      </div>
      <button onClick={addService}>Add Entry</button>
      <div>
        <ul>{services.map(service=>(<li key={service.id}> Service Name:
          {service.name}<br></br>Rating: {service.rating}  Type: {service.type}<br></br>Contact:{service.contact}

        </li>))}</ul>
      </div>
    </center>
    </>
  );
}
export default App;