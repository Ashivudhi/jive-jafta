import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './IconView.module.scss';

export default function IconView(props) {
  const {
    alt, src, className, to,
  } = props;
  return (
    <Link to={to}>
      <img className={cx(className, styles.icon)} src={src} alt={alt} />
    </Link>
  );
}