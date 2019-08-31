import React from 'react';
import cx from 'classnames';
import { withRouter, Route, NavLink, HashRouter } from 'react-router-dom';
import colors from '../../utils/helpers/colors';
import ButtonView from '../ButtonView/ButtonView';
import styles from './HeaderView.module.scss';
import TextView from '../TextView/TextView';
import Home from '../HeaderView/HeaderView';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import OurServicesPage from '../../pages/OurServicesPage/OurServicesPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import ActiveRidersPage from '../../pages/ActiveDriverPage/SeeActiveDriverPage';



export default withRouter((props) => {
 
  return (
  <HashRouter>
    <div className={cx(styles.content)} >
      <div className={cx(styles.left)}>
     <NavLink to ="./">
      <TextView
        text="Jive"
      /></NavLink> 
       </div>
      <div className={cx(styles.middle)}>
      <ul>
  <li><NavLink to="./aboutus">ABOUT US </NavLink></li>
  <li><NavLink to="./ourservices">OUR SERVICES</NavLink></li>
  <li><NavLink to="./contactus">CONTACT US</NavLink></li>
  <li><NavLink to="./activeriders">ACTIVE DRIVERS</NavLink></li>
</ul>
<div className="content">
            <Route exact path="./" component={Home}/>
            <Route path="/aboutus" component={AboutUsPage}/>
            <Route path="/ourservices" component={OurServicesPage}/>
            <Route path="/contactus" component={ContactUsPage}/>
            <Route path="/activeriders" component={ActiveRidersPage}/>
          </div>
      </div>
      <div className={cx(styles.right)}>
        <ButtonView
          className={cx(styles.loginButton, styles.button)}
          text="LOGIN"
          onClick={() => alert('clicked')}
          bgcolor={colors.jiveWhite}
        />
        <ButtonView
          className={cx(styles.registerButton, styles.button)}
          text="REGISTER"
          onClick={() => alert('clicked')}
          bgcolor={colors.jiveWhite}
        />
      </div>
    </div>
  </HashRouter>
  );
});