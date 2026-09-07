import React, { useEffect, useState } from "react"

import axios from "axios"


const App = () => {

  const [student, setStudents] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const getStudents = async () => {
    try {
      const respones = await axios.get("http://localhost:5000/students");
      setStudents(respones.data);
    }
    catch (error) {
      console.log("error");
    }
  }

} 