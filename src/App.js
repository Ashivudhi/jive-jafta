import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/HeaderView/HeaderView';
 import LoginPage from './pages/LoginPage/LoginPage';
// import SignUpPage from './pages/SignupPage/SignupPage';
// import DriverSignUpPage from './pages/DriverPage/DriverSignUpPage';
 import DriverLoginPage from './pages/DriverPage/DriverLoginPage';
 import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
 //import HomePage from './pages/HomePage/HomePage';
 import RiderLoginPage from './pages/RiderPage/RiderSignUpPage'
 import Footer from './components/FooterView/FooterView';


function App() {
  return (
    <Router>
    <Header/>
    {/* <RiderLoginPage/> */}
    <Footer/>
  </Router>
);
}

export default App;