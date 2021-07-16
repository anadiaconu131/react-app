import React from 'react';
import {
  faDiceD6,
  faUsers,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const sideBarItems = [
    { title: 'Home', icon: faDiceD6, path: '/' },
    { title: 'Users', icon: faUsers, path: '/users' },
    { title: 'Add user', icon: faUserCog, path: '/new-user' },
  ];
  const SideBarItem = ({ icon, title }) => (
    <li className={styles.Item}>
      <FontAwesomeIcon className={styles.Icon} icon={icon} />
      <p>{title}</p>
    </li>
  );
  SideBarItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  };
  return (
    <div className={styles.Block}>
      <ul className={styles.List}>
        {sideBarItems.map(({ title, icon, path }) => (
          <Link to={path} key={title.toString()}>
            <SideBarItem icon={icon} title={title} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
