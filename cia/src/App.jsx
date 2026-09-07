import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Corrected line below: added () => */}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>{count}</h1>
    </div>
  );
}