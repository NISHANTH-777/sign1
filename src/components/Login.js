import React from "react"

export default function Login() {
     return (
     <div>
        <h1>Login</h1>
        <ul className="flex flex-col space-x-10">
            <input type="text" placeholder="Your Email" required/> <br /><br />
            <input type="text/number" placeholder="Your Password" required/><br /><br />
            <button>LOGIN</button>

        </ul>
     </div>
     );
};