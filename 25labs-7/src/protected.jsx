import React from "react"
import { Navigate } from "react-router-dom"

const Protected = ({ user, children }) => {

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Protected