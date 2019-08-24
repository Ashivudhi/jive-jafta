import React, { Component } from 'react';
import cx from 'classnames';
//import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/ButtonView';
// import SocialButtonView from '../../components/SocialButtonView/SocialButtonView';
import colors from '../../utils/helpers/colors';
import styles from './LoginPage.module.scss';
import DriverLogo from '../../assets/Driver.jpg';
import RiderLogo from '../../assets/Rider.png';
import DriverLoginPage from '../DriverPage/DriverLoginPage';


export default class LoginPage extends Component {
 constructor(){
   super();
   this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.props.history.push('./DriverLoginPage');
 }
  render() {
   
    return (
      <div className={cx(styles.content)}>
        <div className={cx(styles.leftpane)}>
        <div className={cx(styles.leftHeader)}>
            <img src={DriverLogo} height={300} alt="Driver" />
          </div>
          <div className={cx(styles.leftBody)}>
          <ButtonView
                text="LOGIN AS A  DRIVER"
                bgcolor={colors.jiveBlue}
                onClick={() => this.handleClick}
                tcolor={colors.jiveGray}
              />
          </div>
            
          </div>

        <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
          <img src={RiderLogo} height={270} alt="Rider" onClick={DriverLoginPage}/>
          </div>
          <div className={cx(styles.rightBody)}>
            <ButtonView
                text="LOGIN AS A  RIDER"
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
