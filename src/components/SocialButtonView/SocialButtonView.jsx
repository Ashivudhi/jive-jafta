import React from 'react';
import cx from 'classnames';
import facebookLogo from '../../assets/socail_facebook.png';
import googleLogo from '../../assets/socail_google.png';
import styles from './SocialButtonView.module.scss';

export default function SocialButton(props) {
  const images = {
    facebook: facebookLogo,
    google: googleLogo,
   
  };
  const { social, onClick } = props;
  return (
    <img
      className={cx(styles.socialButton)}
      src={images[social]}
      alt={social}
      onClick={() => onClick()}
    />
  );
}
