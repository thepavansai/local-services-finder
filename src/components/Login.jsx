import React from "react";

function Login() {
    return (
        <center>
            <div className="login-outer">
                <h2>Login</h2>
                <form><div className="login-inp">
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                </div>
                    <button type="submit">Login</button>
                </form>
            </div></center>
    );
}
export default Login