import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {handleGoogleLogin,handleLogin,} = useContext(authContext)
    const [error,setError] = useState("");
    const location =useLocation()
    const navigate =useNavigate()
    console.log(location)

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
          await handleLogin(email, password);
          navigate(from, { replace: true });
      } catch (err) {
          setError(err.message);
      }
  };
  const googleLoginHandler = async () => {
    try {
        await handleGoogleLogin();
        navigate(from, { replace: true });
    } catch (err) {
        setError(err.message);
    }
}; 
    return (
      <div>
      <form action="" className="flex flex-col gap-4 p-4 max-w-sm mx-auto"onSubmit={handleSubmit} >
      <div className="flex flex-col">
      <label className="font-semibold">Email:</label>
     <input
      name='email'
      type="email"
      placeholder="Type here"
      className="input input-bordered input-primary w-full max-w-xs"
  />
</div>

<div className="flex flex-col">
  <label className="font-semibold">Password:</label>
  <input
      name = 'password'
      type="password"
      placeholder="Type here"
      className="input input-bordered input-primary w-full max-w-xs"
  />
</div>
<div className="flex flex-col">
  <label className="font-semibold">Forget Password :</label>
  <input
      name = 'password'
      type="password"
      placeholder="Type here"
      className="input input-bordered input-primary w-full max-w-xs"
  />
</div>
<button type='submit' className="btn btn-primary w-auto px-6 py-3">Login</button>
</form>
<button onClick={googleLoginHandler} className="btn btn-outline mt-4">Login with Google</button>
            {error && <p className="text-red-500">{error}</p>}

            {/* Register Link */}
            <p className="mt-4 text-center">
                Don't have an account? <Link to="/register" className="text-blue-500 underline">Register here</Link>
            </p>
     
      
  </div>




    );
};

export default Login;