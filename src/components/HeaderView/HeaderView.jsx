import React from 'react';
import cx from 'classnames';
import { withRouter } from 'react-router-dom';
import colors from '../../utils/helpers/colors';
import ButtonView from '../ButtonView/ButtonView';
import styles from './HeaderView.module.scss';
import TextView from '../TextView/TextView';


export default withRouter((props) => {
 
  return (
    <div className={cx(styles.content)} >
      <div className={cx(styles.left)}>
      <TextView
        text="Jive"
      />
       </div>
      <div className={cx(styles.middle)}>
      <ul>
  <li><a href="default.asp">ABOUT US</a></li>
  <li><a href="news.asp">OUR SERVICES</a></li>
  <li><a href="contact.asp">CONTACT US</a></li>
  <li><a href="about.asp">ACTIVE DRIVERS</a></li>
</ul>
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
  );
});