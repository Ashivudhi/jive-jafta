import React, { Component } from 'react';
import cx from 'classnames';
import ButtonView from '../../components/ButtonView/ButtonView';
import colors from '../../utils/helpers/colors';
import styles from './SignupPage.module.scss';
import DriverLogo from '../../assets/Driver.jpg';
import RiderLogo from '../../assets/Rider.png';



export default class SignUpPage extends Component {
 
  render() {
   
    return (
      <div className={cx(styles.content)}>
        <div className={cx(styles.leftpane)}>
        <div className={cx(styles.leftHeader)}>
            <img src={DriverLogo} height={200} alt="Driver" />
          </div>
          <div className={cx(styles.leftBody)}>
          <ButtonView
                text="REGISTER AS A  DRIVER"
                bgcolor={colors.jiveBlue}
                onClick={() => alert('Clicked')}
                tcolor={colors.jiveGray}
              />
          </div>
          </div>

        <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
          <img src={RiderLogo} height={170} alt="Rider" />
          </div>
          <div className={cx(styles.rightBody)}>
            <ButtonView
                text="REGISTER AS A  RIDER"
                bgcolor={colors.jiveBlue}
                onClick={() => alert('Clicked')}
                tcolor={colors.jiveGray}
              />
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
