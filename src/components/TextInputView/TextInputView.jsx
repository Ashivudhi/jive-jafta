import React, { Component } from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import styles from './TextInputView.module.scss';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleInputChange = (e) => {
    const { onChange } = this.props;
    this.setState({
      text: e.target.value,
    });
    onChange(e.target.value);
  };

  render() {
    const { text } = this.state;
    const { classname, label, placeholder } = this.props;
    return (
      <input
        className={cx(styles.input, classname)}
        label={label}
        value={text}
        placeholder=""
        onChange={event => this.handleInputChange(event)}
      />
    );
  }
}

LoginPage.propTypes = {
  classname: propTypes.string,
  label: propTypes.string,
  onChange: propTypes.func.isRequired,
};

LoginPage.defaultProps = {
  classname: '',
  label: 'none',
};