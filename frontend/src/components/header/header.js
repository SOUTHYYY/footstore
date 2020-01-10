import React from 'react';
import styles from './header.module.css'
import find from '../../images/header-images/find.svg'
import menu from '../../images/header-images/menu.svg'
import { NavLink } from 'react-router-dom'

const Header = props => {
    return (
        <header>
            <div className={styles.header__container}>
                <div>
                    <NavLink to='/home'>
                        <h2>SOUTHYYY</h2>
                    </NavLink>
                </div>
                <div className={styles.header__navbar}>
                    <ul>
                        <NavLink to='/sale'>
                            <li>Продать</li>
                        </NavLink>
                        <NavLink to='/profile'>
                            <li>Профиль</li>
                        </NavLink>
                        <li>
                            <img src={find} alt='find'></img>
                        </li>
                        <li>
                            <img src={menu} alt='menu'></img>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header