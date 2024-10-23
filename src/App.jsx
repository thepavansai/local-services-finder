import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Add_Entry from "./Add_Entry";

function App(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/add-service" element={<Add_Entry/>}/>
                </Routes>
            </div>
            
        </Router>
    )
}
export default App;