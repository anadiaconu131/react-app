import React from "react";
import {
    faDiceD6,
    faUsers,
    faUserCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss';

const SideBar = () => {
    const sideBarItems = [
        { title: 'Home', icon: faDiceD6, path: 'dashboard' },
        { title: 'Users', icon: faUsers, path: 'users' },
        { title: 'User Update', icon: faUserCog, path: 'user-update' },
    ];
    const SideBarItem = ({icon, title}) => {
        return (
            <li className={styles.Item}>
                <FontAwesomeIcon className={styles.Icon} icon={icon} />
                <p className={styles.title}>{title}</p>
            </li>
        )
    };
    return (
        <div className={styles.Block}>
            <ul className={styles.List}>
                {sideBarItems.map(({title, icon, path}) => {
                    return <Link to={path} key={title.toString()}>
                        <SideBarItem icon={icon} title={title} />
                    </Link>
                })}
            </ul>
        </div>
    )
}

export default SideBar;
