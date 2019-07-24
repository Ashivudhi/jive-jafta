import React from 'react'
import {BrowserRouter as Link, Route } from "react-router-dom";
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Home from './App';
    
function Header() {
    return (
      <div className="App-header">
        <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/ourservices">Our Services</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/ourservices" component={OurServices} />
      </div>
      
    );
    }

export default Header
