import React from 'react';
import parent from './compoents/parent';
import { createContext } from 'react';
export const nameContext = createContext()

const nameContext = createContext();
const App = () => {
  const name = "namay"

  return (
    <div>
      <nameContext.Provider value={name}>
        <parent />
      </nameContext.Provider>
    </div>
  )
}
export default App;
