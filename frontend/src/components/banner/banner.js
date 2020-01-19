import React from 'react'
import styles from './banner.module.css'
import { NavLink } from 'react-router-dom'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__title}>покупайте и продавайте</div>
            <div className={styles.banner__title}>оригинальные вещи</div>
            <div className={styles.buttons}>
                <NavLink to='/catalog'>
                    <button className={styles.btn}>Смотреть каталог</button>
                </NavLink>
                <NavLink to='/home'>
                    <button className={styles.btn}>Продать вещи</button>
                </NavLink>

            </div>
        </div>
    )
}


export default Banner
