import { UserAuthContextProvider } from "./routes/ProtectedRoute";
import {Routes, Route} from 'react-router-dom'

import ProtectedRoute from "./routes/ProtectedRoute"
import Welcome from "./pages/Welcome"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
