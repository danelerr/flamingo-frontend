import { useEffect } from "react"
import "./App.css"

// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

// Components
import Navbar from "./components/Common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Instructor from "./components/core/Dashboard/Panel"
import Settings from "./components/core/Dashboard/Settings"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword"
import CssBaseline from '@mui/material/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';


// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import CrearVideo from "./components/core/Dashboard/CrearVideo"

function App() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar />
      <CssVarsProvider defaultMode="dark" >
        <CssBaseline enableColorScheme />
     </CssVarsProvider>
      <Routes>
        <Route path="/" element={
          <OpenRoute>
            <Home />
          </OpenRoute>
          }/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

      
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
          }
        >

          {/* Dashboard */}
          <Route path="dashboard/" element={<Instructor />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route path="dashboard/crear-video" element={<CrearVideo/>} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
