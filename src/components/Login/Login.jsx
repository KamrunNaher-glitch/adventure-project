import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {handleGoogleLogin,handleLogin,handleLogout} = useContext(authContext)
    const location =useLocation()
    const navigate =useNavigate()
    console.log(location)
    const handleSubmit = (e) =>{
        e.preventDefault()
         
        const email = e.target.email.value
        const password = e.target.password.value 
       handleLogin(email,password)
       .then(res =>{
        navigate (location.state.from)
       })
       
    }
    const googleLoginHandler = () =>{
        handleGoogleLogin()
        .then(res =>{
            navigate(location.state.from)
        })
    }

    
    
    return (
        <div className='mt-10  ml-10 space-y-3'>
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
            <button className='btn btn-primary ' type='submit'>Login</button>
        </form>
       
       
        <button onClick={ googleLoginHandler }>Logout</button>
    </div>
    );
};

export default Login;