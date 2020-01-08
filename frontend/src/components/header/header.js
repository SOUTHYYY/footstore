import React from 'react';
import styles from './header.module.css'
import find from '../../images/header-images/find.svg'
import menu from '../../images/header-images/menu.svg'

const Header = props => {
    return (
        <header>
            <div className={styles.header__container}>
                <div>
                    <h2>SOUTHYYY</h2>
                </div>
                <div className={styles.header__navbar}>
                    <ul>
                        <li>Продать</li>
                        <li>Профиль</li>
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