import React from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1> hello</h1>
            <button onClick={() => { setUser({ role: "user" }); navigate("/dashboard") }}>login as user</button>
            <button onClick={() => { setUser({ role: "admin" }); navigate("/dashboard") }}> login as admin</button>
        </div>
    )
}

export default Login