import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [log, setLog] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  function addLog(text) {
    setLog((prevLog) => prevLog.concat(text));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addLog(" form submitted");
    setName("");
  };


  const appTheme = () => {
    backgroundColor: darkMode ? "white" : "black";
    color: darkMode ? "black" : "white";
    height: "100vh";


  }

  return (
    <div style={appTheme}>
      <h2> smart interaction panel</h2>

      <button
        onClick={() => {
          setDarkMode(!darkMode);

        }}
      >
        {darkMode ? "light mode" : "dark mode"}


      </button>
      <form onSubmit={handleSubmit}  >

        <input type="text" placeholder="enter your name" value={name}
          onChange={(e) => {
            setName(e.target.value);
            addLog(e.target.value);
          }}

          onFocus={() => { addLog(" input focus") }}
          onBlur={() => { addLog(" input blur") }}
          onCopy={() => { addLog("copied") }}
          onPaste={() => { addLog("pasted") }}
          onCut={() => { addLog("cut") }}

        />

      </form>

      <button onClick={() => {
        addLog(" button via button")
        setName("")
      }}
        onMouseEnter={() => { addLog(" mouse enter") }}
        onDoubleClick={() => { addLog(" double click") }}
      >submit</button>

      <h2> logs</h2>




      <ul>
        {
          log.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;