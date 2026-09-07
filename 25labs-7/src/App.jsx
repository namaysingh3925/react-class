import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "./login"
import Dashboard from "./dashboard"
import ProtectedRoute from "./protected"

const App = () => {

  const [user, setUser] = useState(null)


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />

        <Route path="/dashboard" element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} setUser={setUser} />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App