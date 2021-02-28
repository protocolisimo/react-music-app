import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// styles
import styles from './Navbar.module.css';

// img
import logoImg from '../../assets/img/logo.png'

export const Navbar = () => {

    const [isMuneOpen, setMenuOpen] = useState(false);
    
    function onClickHandler () {
        setMenuOpen(!isMuneOpen)
    }

    return (
        <nav className={`${styles.navbar} ${isMuneOpen ? styles.expand : ''}`}>
            <div className={styles.logo}>
                <NavLink className={styles.navLink} to="/" excat="true" >
                    <img src={logoImg}/>
                </NavLink>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <NavLink className={styles.navLink} to="/" excat="true" >
                            <span>
                                Home
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} to="/create-song" >
                            <span>
                                Create Song
                            </span>
                        </NavLink>
                    </li>
                    <button className={styles.expanButton} onClick={onClickHandler}>
                        >
                    </button>
                    {/* <li>
                        <NavLink className={styles.navLink} to="/" excat >
                            <span>
                                Login
                            </span>
                        </NavLink>
                        <NavLink className={styles.navLink} to="/" excat >
                            <span>
                                Logout
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} to="/" excat >
                            <span>
                                Favourite
                            </span>
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}