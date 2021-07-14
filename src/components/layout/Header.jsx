import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ pageName }) => (
  <>
    <h4 className={styles.Title}>Your wallet</h4>
    <p><b>{pageName}</b></p>
  </>
);

Header.propTypes = {
  pageName: PropTypes.string,
};

Header.defaultProps = {
  pageName: 'Home',
};
export default Header;
