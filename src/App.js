import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
//import Header from './header';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <Router>
    <LoginPage/>
  </Router>
);
}

export default App;