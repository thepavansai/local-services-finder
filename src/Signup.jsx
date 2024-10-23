import React from "react";
function Signup(){
    return(
    <center>
    <div className="signup-outer">
        <h2>Signup</h2>
        <div className="signup-inp">
        <input type="text" placeholder="Username" required/>
        <input type="email" placeholder="E-Mail" required/>
        <input type="password" placeholder="Password" required/>
        </div>
        <button type="submit">Sign Up</button>
    </div>
    </center>)
}
export default Signup