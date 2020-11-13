import React from 'react';
import './App.css';
import Planet from "./components/Planets/Planets"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Starwars App</h1>
      </header>
      <main>
        <Planet />
      </main>
      <footer>
        Application created by Raymen Deol
      </footer>
    </div>
  );
}

export default App;
