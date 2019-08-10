import React from 'react';
import cx from 'classnames';
import styles from './ButtonView.module.scss';

export default function ButtonView(props) {
  const {
    text, onClick, bgcolor, className,tcolor
  } = props;
  return (
    <button
      type="button"
      className={cx(styles.button, className)}
      style={{ backgroundColor: bgcolor, color:tcolor}}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}