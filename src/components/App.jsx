import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Add_Entry from "./Add_Entry";
import Delete from "./Delete";

function App(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/add-service" element={<Add_Entry/>}/>
                    <Route path="/delete" element={<Delete/>}/>
                </Routes>
            </div>
            
        </Router>
    )
}
export default App;