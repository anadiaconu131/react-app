import React from "react";
import {
    faArrowCircleDown,
    faArrowCircleUp,
    faUserCircle,
    faDiceD6
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './SideBar.module.scss';

const SideBar = () => {
    const sideBarItems = [
        { title: 'Dashboard', icon: faDiceD6 },
        { title: 'Outgoings', icon: faArrowCircleUp },
        { title: 'Incomes', icon: faArrowCircleDown },
        { title: 'Account', icon: faUserCircle }
    ];
    return (
        <div className={styles.Block}>
            <ul className={styles.List}>
                {sideBarItems.map(({title, icon}) => {
                    return <li className={styles.Item} key={title.toString()}>
                        <FontAwesomeIcon className={styles.Icon} icon={icon} />
                        <p className={styles.title}>{title}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SideBar;
