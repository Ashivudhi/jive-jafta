import React, { Component } from 'react';
import cx from 'classnames';
import TextInput from '../../components/TextInputView/TextInputView';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
import SocialButtonView from '../../components/SocialButtonView/SocialButtonView';
import launcherLogo from '../../assets/ic_laucnher_nil.svg';
import colors from '../../utils/helpers/colors';
import styles from './SignupPage.module.scss';

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
            <img src={launcherLogo} alt="Logo" />
          </div>
          <div className={cx(styles.leftBody)}>
            <TextView text="The Open Namibian Indigenous Languages (NIL) Project" />
            <TextView text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque necessitatibus saepe enim eos, praesentium totam iusto explicabo consequatur aliquam doloremque quidem ea id accusamus. Labore nihil qui rem maiores exercitationem itaque, aliquam consequatur minus fuga ad repellendus eos error corporis, minima fugit amet omnis laboriosam! Pariatur dolor aliquam aliquid voluptates molestiae dolore qui alias." />
            <ButtonView
              text="Get Mobile App"
              bgcolor={colors.nilWhite}
              onClick={() => alert('Clicked')}
            />
            <div />
            <div className={cx(styles.leftFooter)}>@ Open NIL Project. All Right Resevered</div>
          </div>
        </div>
        <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
            <TextView text="Join The Largest Namibian Digital Indigenous Language Community" />
          </div>
          <div className={cx(styles.rightBody)}>
            <div className={cx(styles.buttonsContainer)}>
              <TextInput placeholder="Username" />
              <TextInput placeholder="Email" />
              <TextInput placeholder="Password" />
            </div>
            <ButtonView
              text="Sign Up"
              bgcolor={colors.nilDarkBlue}
              onClick={() => alert('Clicked')}
            />
            <TextView text='By clicking "Sign Up" you wil be agreeing to our Terms of service and privacy statements' />
          </div>
          <div className={cx(styles.rightFooter)}>
            <div className={cx(styles.blueLine)}>
              <span>OR SIGN UP WITH</span>
              <div className={cx(styles.socialButtons)}>
                <SocialButtonView social="twitter" onClick={() => alert('OK')} />
                <SocialButtonView social="facebook" onClick={() => alert('OK')} />
                <SocialButtonView social="google" onClick={() => alert('OK')} />
                <SocialButtonView social="github" onClick={() => alert('OK')} />
              </div>
              <ButtonView
                text="Sign Up Later"
                bgcolor={colors.nilRed}
                onClick={() => alert('Clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
