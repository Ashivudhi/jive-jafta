import React from 'react';
import cx from 'classnames';
import { withRouter, Link } from 'react-router-dom';
import lists from '../../utils/helpers/lists';
import colors from '../../utils/helpers/colors';
import ButtonView from '../ButtonView/ButtonView';
import IconView from '../IconView/IconView';
import styles from './HeaderView.module.scss';

/* Images */


export default withRouter((props) => {
  const currentLocation = props.location.pathname;
  const isActivePage = index => lists.headerMiddlePages.indexOf(currentLocation) === index;
  const hideHeader = () => (lists.hideHeaderAndFooter.includes(currentLocation) ? 'none' : 'flex');
  return (
    <div className={cx(styles.content)} style={{ display: hideHeader() }}>
      <div className={cx(styles.left)}>
        <IconView
          to="/translate"
          className={cx(styles.headerIcon)}
          src={nilLeftLogo}
          alt="NIL Icon"
        />
      </div>
      <div className={cx(styles.middle)}>
        <IconView
          to="/translate"
          className={cx(styles.middleIcon)}
          src={isActivePage(0) ? translateImgActive : translateImgInactive}
          alt="NIL Icon"
        />
        <IconView
          to="/dictionary"
          className={cx(styles.middleIcon)}
          src={isActivePage(1) ? dictionaryImgActive : dictionaryImgInactive}
          alt="NIL Icon"
        />
        <IconView
          to="/addword"
          className={cx(styles.middleIcon)}
          src={isActivePage(2) ? contributeImgActive : contributeImgInactive}
          alt="NIL Icon"
        />
        <IconView
          to="/request"
          className={cx(styles.middleIcon)}
          src={isActivePage(3) ? requestsImgActive : requestsImgInactive}
          alt="NIL Icon"
        />
        <IconView
          to="/community"
          className={cx(styles.middleIcon)}
          src={isActivePage(4) ? communityImgActive : communityImgInactive}
          alt="NIL Icon"
        />
        <IconView
          to="/information"
          className={cx(styles.middleIcon)}
          src={isActivePage(5) ? infoImgActive : infoImgInactive}
          alt="NIL Icon"
        />
      </div>
      <div className={cx(styles.right)}>
        <ButtonView
          className={cx(styles.loginButton, styles.button)}
          text="LOGIN"
          onClick={() => alert('clicked')}
          bgcolor={colors.nilWhite}
        />
        <ButtonView
          className={cx(styles.registerButton, styles.button)}
          text="REGISTER"
          onClick={() => alert('clicked')}
          bgcolor={colors.nilWhite}
        />
      </div>
    </div>
  );
});