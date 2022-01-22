import { UserAuthContextProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

import ProtectedRoute from "./routes/ProtectedRoute"
import Welcome from "./pages/Welcome"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
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

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
      </UserAuthContextProvider>
  );
}

export default App;
