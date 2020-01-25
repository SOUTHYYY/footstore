import styles from './profile.module.css'
import React from 'react';
import settings from '../../images/settings-images/settings.svg'
import { NavLink } from 'react-router-dom';

const Profile = props => {

    const bids_box = (<div>
        <div className={styles.bids_box__text}>У Вас нет ставок</div>
        <div className={styles.bids_box__catalog}>ПЕРЕЙТИ В КАТАЛОГ</div>
    </div >)
    return (
        <div className={styles.profile__container}>
            <div className={styles.profile}>
                <div className={styles.profile__info}>
                    <div className={styles.profile__info_image}>
                        <div></div>
                    </div>
                    <div className={styles.profile__info_title}>
                        <div className={styles.title__name}>Алексей Лаптырев</div>
                        <div className={styles.title__city}>Нижний Новгород</div>
                        <div className={styles.title__status}>Статус: <span className={styles.tiffany}>White</span></div>
                    </div>
                </div>
                <div className={styles.profile__progress}>

                </div>
                <NavLink to='profile/settings'>
                    <div className={styles.settings}>
                        <img src={settings} alt='settings'></img>
                        <div>Настройки</div>
                    </div>
                </NavLink>
            </div>
            <div className={styles.profile__main}>
                <div className={styles.profile__main_header}>
                    <div className={styles.header__left}>
                        <div className={styles.active}>Вещи</div>
                        <div>Архив</div>
                    </div>
                    <div className={styles.header__right}>
                        <div className={styles.active}>Ставки</div>
                        <div>Покупка</div>
                        <div>Продажа</div>
                    </div>
                </div>
                <div className={styles.bids_box}>
                    {bids_box}
                </div>
            </div>
        </div>
    )
}

export default Profile