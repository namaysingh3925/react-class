import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
    console.log(nameRef.current.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted name:", name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;