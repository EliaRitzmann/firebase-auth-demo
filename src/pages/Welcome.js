import React from 'react';

const Welcome = () => {
  return <div>
      <h1 className='text-2xl font-bold text-blue-500'>Welcome Page</h1>

      <h1 className='text-xl font-bold text-sky-700 mt-1'>All Pages:</h1>
      <ul>
        <li className=''><a href="/">Welcome</a></li>
        <li className=''><a href="/dashboard">Dashboard</a></li>
        <li className=''><a href="/login">Login</a></li>
        <li className=''><a href="/signup">SignUp</a></li>
        <li className=''><a href="/resetpassword">ResetPassword</a></li>
      </ul>
  </div>;
};

export default Welcome;
