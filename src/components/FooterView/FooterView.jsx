import React from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';
import lists from '../../utils/helpers/lists';
import styles from './FooterView.module.scss';

export default withRouter((props) => {
  const currentLocation = props.location.pathname;

  return (
    <div
      className={cx(styles.content)}
      style={{ display: lists.hideHeaderAndFooter.includes(currentLocation) ? 'none' : 'block' }}
    >
      &copy; The Open NIL Project. All Rights Reserved.
    </div>
  );
});

