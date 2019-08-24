import React, { Component } from 'react';
import cx from 'classnames';
import TextInput from '../../components/TextInputView/TextInputView';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
import colors from '../../utils/helpers/colors';
import styles from './RiderLoginPage.module.scss';

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
              <TextInput placeholder="Username" />
            <div className={cx(styles.buttonsContainer)}>
              
              <TextInput placeholder="Email" />
            <div className={cx(styles.rightMiddle)}>
              <TextInput placeholder="Password" />
              </div>
            </div>
            
          </div>
          <div className={cx(styles.rightFooter)}>
            <div className={cx(styles.blueLine)}>
            <ButtonView
              text="LOG IN"
              bgcolor={colors.jiveDarkBlue}
              onClick={() => alert('Clicked')}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
