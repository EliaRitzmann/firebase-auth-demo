import { UserAuthContextProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

import ProtectedRoute from "./routes/ProtectedRoute"
import Welcome from "./pages/Welcome"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ResetPassword from "./pages/ResetPassword";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        
      </Routes>
      </BrowserRouter>
      </UserAuthContextProvider>
  );
}

export default App;
