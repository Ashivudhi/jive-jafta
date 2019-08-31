import React, { Component } from 'react';
import cx from 'classnames';
import TextInput from '../../components/TextInputView/TextInputView';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
import SocialButtonView from '../../components/SocialButtonView/SocialButtonView';
import colors from '../../utils/helpers/colors';
import styles from './RiderSignUpPage.module.scss';

export default class RiderLoginPage extends Component {
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
            
          </div>
          <div className={cx(styles.leftBody)}>
            
            <div />
            
          </div>
        </div>
        <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
            <TextView text="Join The Largest Namibian Drivers and Riders tracking Community" />
          </div>
          <div className={cx(styles.rightBody)}>
            <div className={cx(styles.buttonsContainer)}>
              <TextInput placeholder="Username" />
              <div className={cx(styles.emailButton)}><TextInput placeholder="Email" /></div>
              <div className={cx(styles.emailButton)}><TextInput placeholder="Password" /></div>
              
            </div>
            <div className={cx(styles.signupButton)}>
            <ButtonView
              text="SIGN UP"
              bgcolor={colors.jiveDarkBlue}
              onClick={() => alert('Clicked')}
            />
            </div>
          </div>
          <div className={cx(styles.rightFooter)}>
          <TextView text='You have agreed to our terms and conditions if you click "Sign Up"' />
            <div className={cx(styles.blueLine)}>
              <span>OR SIGN UP WITH</span>
              <div className={cx(styles.socialButtons)}>
                
                <SocialButtonView social="facebook" onClick={() => alert('OK')} />
                <SocialButtonView social="google" onClick={() => alert('OK')} />
               
              </div>
              <div className={cx(styles.laterButton)}>
                <ButtonView
                  text="SIGN UP LATER"
                  bgcolor={colors.jiveRed}
                  onClick={() => alert('Clicked')}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
