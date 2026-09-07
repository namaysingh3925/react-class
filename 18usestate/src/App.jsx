import React, { useState } from 'react'
import { createContext } from 'react'


const countContext = createContext()

const App = () => {
  const [count, setCount] = useState(0)
  return (
    < div >
      <countContext.Provider value={{ count, setCount }}>    <displaybtn /> </countContext.Provider>
    </div >
  )
}

export default App