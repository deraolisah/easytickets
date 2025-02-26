// frontend/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import loginBg from '../assets/login-bg.jpeg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to home page or dashboard
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className='md:px-0 fixed z-50 !w-full h-full top-0 left-0 bg-white'>
      <div className='mx-auto relative flex flex-col md:flex-row'>

        <Link to="/" className='absolute border-1 text-primary border-primary rounded-full py-1 px-2.5 text-xs mt-6 ml-4'> Go Back </Link>

        <div className='flex flex-col items-center justify-center w-full md:w-[40%] h-screen -mt-10 md:mt-0 p-4'>
          <h2 className='text-center text-2xl font-bold mb-6'> Login </h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-[340px] mx-auto p-4 rounded-md bg-primary/10'>
            <input
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required
              className='bg-white p-2 pl-4 rounded-md'
              />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password"
              required
              className='bg-white p-2 pl-4 rounded-md'
              />
              <div className='flex justify-center items-center gap-2'>
                <button type="submit" className='bg-primary text-white py-2 px-10 w-full rounded-md cursor-pointer border-1 border-primary'>
                  Login 
                </button>
                <button className='w-full rounded-md cursor-pointer border-1 border-primary text-primary py-2 px-10' onClick={() => window.history.back()}>
                  Cancel
                </button>
              </div>
            <p className='text-xs'> Don't have an account yet? Sign up </p>
          </form>
        </div>

        <div className='bg-primary w-[60%] h-screen hidden md:grid grid-cols-1 overflow-hidden relative'
          style={{
            // backgroundImage: `url(${backgroundImageSm})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            {/* <img src={image1} alt='' className='w-fit h-full object-cover' /> */}
            {/* <img src={image2} alt='' className='w-full h-full object-cover' /> */}
            {/* <img src={image3} alt='' className='w-full h-fit object-contain object-bottom' /> */}
            {/* <img src={image4} alt='' className='w-fit h-full object-cover' /> */}
            {/* <img src={image5} alt='' className='w-fit h-full object-cover' /> */}
            {/* <img src={image6} alt='' className='w-full h-fit object-cover object-bottom' /> */}
            {/* <img src={image7} alt='' className='w-full h-fit object-contain object-bottom' /> */}
            <div className='absolute w-full h-full bg-primary/80'></div>
            <img src={loginBg} alt='' className='w-fit h-full object-cover' />             
        </div>
      </div>
    </div>
  );
}

export default Login;