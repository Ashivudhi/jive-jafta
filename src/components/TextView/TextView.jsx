import React from 'react';
import cx from 'classnames';
import styles from './TextView.module.scss';

export default function TextView(props) {
  const { text } = props;
  return <div className={cx(styles.textContainer)}>{text}</div>;
}
