import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ResetPassword = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const {resetPassword} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setError("");
        try{
            
             await resetPassword(email);
             navigate("/")
        }catch(error){
         setError(error.code)
        } 
      }

  return <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
          Log in to your account
        </a>
      </p>
    </div>
    
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            onChange={(event) => {setEmail(event.target.value)}}
          />
        </div>
        </div>
        
      <h1 className='text-red-500'>{error}</h1>
      
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          
          Send Email
        </button>
      </div>
    </form>
  </div>
  
</div>;
};

export default ResetPassword;
