import React from 'react'
import useTheme from './hooks/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <h1> theme preference manager </h1>
      <h2>current theme:{theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App
