import React, { Component } from 'react';
import cx from 'classnames';
import TextInput from '../../components/TextInputView/TextInputView';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
import launcherLogo from '../../assets/ic_laucnher_nil.svg';
import colors from '../../utils/helpers/colors';
import styles from './ResetPasswordPage.module.scss';

export default class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  doReset = () => {
    const { email } = this.state;
    console.log(email)
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
            <TextView text="Welcome back :)" />
            <TextView text="Enter your email address and we will send you a link to reset your password" />
          </div>
          <div className={cx(styles.rightBody)}>
            <div className={cx(styles.buttonsContainer)}>
              <TextInput placeholder="Enter your email address" />
            </div>
            <ButtonView
              text="SEND RESET EMAIL"
              bgcolor={colors.nilDarkBlue}
              onClick={() => alert('Clicked')}
            />
          </div>
        </div>
      </div>
    );
  }
}