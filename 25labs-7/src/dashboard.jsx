import React from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate("/");
    }

    return (
        <div>   
            <h1> dashboard</h1>
            <p> logged in as {user?.role}  </p>


            <button onClick={handleLogout}> logout </button>
        </div>
    )
}

export default Dashboard