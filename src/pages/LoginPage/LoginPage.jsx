import React, { Component } from 'react';
import cx from 'classnames';
import TextInput from '../../components/TextInputView/TextInputView';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
import SocialButtonView from '../../components/SocialButtonView/SocialButtonView';
import colors from '../../utils/helpers/colors';
import styles from './LoginPage.module.scss';
import DriverLogo from '../../assets/Driver.jpg';
import RiderLogo from '../../assets/Rider.png';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  doLogin = () => {
    const { email, password } = this.state;
    console.log(`loggin in user: ${email} with pass: ${password}`);
  };

  render() {
    return (
      <div className={cx(styles.content)}>
        <div className={cx(styles.leftpane)}>
        <div className={cx(styles.leftHeader)}>
            <img src={DriverLogo} alt="Logo" />
          </div>
          <div className={cx(styles.leftBody)}>
          <TextView text="LOGIN AS A DRIVER" />
          </div>
            <div className={cx(styles.leftFooter)}>
            &copy; JIVE. All Right Resevered
            </div>
          </div>

        <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
          <img src={RiderLogo} alt="Logo" />
          </div>
          <div className={cx(styles.rightBody)}>
            <TextView text='LOGIN AS A  RIDER' />
          </div>
          <div className={cx(styles.rightFooter)}>
            <div className={cx(styles.blueLine)}>
              
          </div>
        </div>
      </div>
      </div>
    );
  }
}
