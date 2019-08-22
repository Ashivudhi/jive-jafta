import React, { Component } from 'react';
import cx from 'classnames';
import TextInput from '../../components/TextInputView/TextInputView';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
import SocialButtonView from '../../components/SocialButtonView/SocialButtonView';
import DriverLogo from '../../assets/Driver.jpg';
import colors from '../../utils/helpers/colors';
import styles from './DriverSignUpPage.module.scss';

export default class SignupPage extends Component {
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
            <TextView text="JIVE APP" />
            <TextView text="This is the app for tracking vehicles and give insurance to clients with cars" />
            
            <div />
            
          </div>
        </div>
        <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
            <TextView text="Join The Largest Namibian Insurance and Cars tracking Community" />
          </div>
          <div className={cx(styles.rightBody)}>
            <div className={cx(styles.buttonsContainer)}>
              <TextInput placeholder="Username" />
              <TextInput placeholder="Email" />
              <TextInput placeholder="Password" />
            </div>
            <ButtonView
            className={cx(styles.registerButton, styles.button)}
              text="SIGN UP"
              bgcolor={colors.jiveDarkBlue}
              onClick={() => alert('Clicked')}
            />
            <TextView text='By clicking "Sign Up" you are agreeing to our Terms and Privacy statements' />
          </div>
          <div className={cx(styles.rightFooter)}>
            <div className={cx(styles.blueLine)}>
              <span>OR SIGN UP WITH</span>
              <div className={cx(styles.socialButtons)}>
                <SocialButtonView social="facebook" onClick={() => alert('OK')} />
                <SocialButtonView social="google" onClick={() => alert('OK')} />
              </div>
              <ButtonView
              className={cx(styles.registerLaterButton, styles.button)}
                text="SIGN UP LATER"
                bgcolor={colors.jiveRed}
                onClick={() => alert('Clicked')}
                
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
