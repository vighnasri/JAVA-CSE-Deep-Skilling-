import React from 'react';
import ListofPlayers from './Listofplayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; // Change to false to test other component

  return (
    <div className="App">
      <h1>Welcome to Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
