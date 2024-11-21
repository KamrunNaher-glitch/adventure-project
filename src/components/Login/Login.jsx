import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {handleGoogleLogin,handleLogin,handleLogout} = useContext(authContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
         
        const email = e.target.email.value
        const password = e.target.password.value 
       handleLogin(email,password)
    }
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
       
    <div>
     Email <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-error w-full max-w-xs"
        name="email"
        required
      />
    </div>
    <div>
      Password <input
        type="password"
        placeholder="Type here"
        className="input input-bordered input-error w-full max-w-xs"
        name="password"
        required
      />
    </div>
            <button type='submit'>Login</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
    </div>
    );
};

export default Login;