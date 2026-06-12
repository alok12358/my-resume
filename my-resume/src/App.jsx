import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import DashBoard from "./pages/Dashboard"
import Navbar from "./componants/navbar"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleLogin = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
  }

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar userEmail={userEmail} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <DashBoard /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
