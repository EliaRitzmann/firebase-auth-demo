import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const {user, logOut} = useAuth();
  const navigate = useNavigate();

  function handleLogOut(){
    try{
      logOut()
      navigate("/login");
  }catch(error){
      console.log(error)
  }
  }

  
  return <div className='flex flex-col items-center mt-20'>
    <h1 className='text-2xl font-bold'>Logged in as: {user.email}</h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5' onClick={handleLogOut}>Log Out</button>
    </div>;
};

export default Dashboard;

