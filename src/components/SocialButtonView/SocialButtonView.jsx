import React from 'react';
import cx from 'classnames';
import twitterLogo from '../../assets/socail_twitter.png';
import facebookLogo from '../../assets/socail_facebook.png';
import googleLogo from '../../assets/socail_google.png';
import githubLogo from '../../assets/socail_twitter.png';
import styles from './SocialButtonView.module.scss';

export default function SocialButton(props) {
  const images = {
    twitter: twitterLogo,
    facebook: facebookLogo,
    google: googleLogo,
    github: githubLogo,
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
