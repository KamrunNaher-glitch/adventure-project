import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext)
    const [error,setError] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      const name = e.target.name.value;
      const image = e.target.image.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const conPassword = e.target.conPassword.value;

      if (password.length < 6) {
          setError("Password must contain at least 6 characters.");
          return;
      }
      if (password !== conPassword) {
          setError("Passwords didn't match.");
          return;
      }
      if (!/[a-z]/.test(password)) {
          setError("Password must contain at least one lowercase letter.");
          return;
      }
      if (!/[A-Z]/.test(password)) {
          setError("Password must contain at least one uppercase letter.");
          return;
      }

      try {
          await handleRegister(email, password, name, image);
          navigate("/profile");
      } catch (err) {
          setError(err.message);
      }
  };
    
    return (
      <div className="mt-10 mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
          <input name="image" type="text" placeholder="Profile Picture URL" className="input input-bordered" required />
          <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
          <input name="conPassword" type="password" placeholder="Confirm Password" className="input input-bordered" required />
          <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
  </div>
    );
};

export default Register;







