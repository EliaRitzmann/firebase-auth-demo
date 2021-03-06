import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {login, googleLogin} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
      e.preventDefault();
        setError("");
        try{
            
             await login(email, password)
             navigate("/")
        }catch(error){
         setError(error.code)
        }
    }

    function loginWithGoogle(){
      googleLogin()
      navigate("/")
  }

  return <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
          create a new account
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
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            onChange={(event) => {setPassword(event.target.value)}}
          />
        </div>
      </div>
      <h1 className='text-red-500'>{error}</h1>
      <div className="flex items-center justify-between">
        

        <div className="text-sm">
          <a href="/reset-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          
          Log in
        </button>
      </div>
    </form>
    <div class="flex justify-between items-center mt-3">
                <hr class="w-full "/> <span class="p-2 text-gray-500 mb-1">OR</span>
                <hr class="w-full"/>
            </div>
            <button class="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800" onClick={loginWithGoogle}>Log In with GOOGLE</button>
  </div>
  
</div>;
};

export default Login;
