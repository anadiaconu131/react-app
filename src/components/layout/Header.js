import React  from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({pageName}) => {
    return (
        <>
            <h4 className={styles.Title}>Your wallet</h4>
            <p><b>{pageName}</b></p>
        </>
    )
}

Header.propTypes ={
    page: PropTypes.string
}

Header.defaultProps = {
    page: 'Home'
}
export default Header;
