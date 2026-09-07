import React, { useState, useEffect } from 'react';
import axios from 'axios';


const axios1 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data)
                setUsers(response.data)
            })

    }, []);





    return (
        <div>
            <h1> user info </h1>
            {users.map((users))}=>{
                return <div key={users.id}  >
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.username} </h3>



            </div>
            }



        </div>


    )
}

export default axios    