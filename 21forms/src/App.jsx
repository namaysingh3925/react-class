import { useState } from "react"

const App = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {}

    if (name.trim().length < 2) {
      newErrors.name = " atleast 2 characters "
    }
    if (!email.includes("@")) {
      newErrors.email = "enter vaild email"

    }
    if (password.length < 6) {
      newErrors.password = "enter vaild password"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)
      console.log(name, email, password)
    }
  }

  if (success) {

    return <div>
      <h2> regestration successfully  </h2>
      <h3> h1,{name}</h3>
      <h4>you have register using this email:{email} </h4>

    </div>
  }

  return (

    <div>

      <h2> student regestration form</h2>
      <form onSubmit={handleSubmit} >
        <label> name </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label>email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>password </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit" > register  </button>




      </form>
    </div>
  )
}

export default App