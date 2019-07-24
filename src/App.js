import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './header';


function App() {
  return (
    <Router>
    <div >
      <Header />

    </div>
  </Router>
);
}

// function Home() {
// return <h2>Home</h2>;
// }

export default App;