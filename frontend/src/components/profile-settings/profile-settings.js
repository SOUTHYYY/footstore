import React from 'react'
import styles from './profile-settings.module.css'
import { NavLink } from 'react-router-dom'

const ProfileSettings = (props) => {
    return (
        <div className={styles.profile_settings}>
            <h1>Настройки</h1>
            <div className={styles.profile_settings__content}>
                <div className={styles.content__row}>
                    <div className={styles.content__row_item}>
                        <div>ИМЯ*</div>
                        <input type='text' />
                    </div>
                    <div className={styles.content__row_item}>
                        <div>ФАМИЛИЯ*</div>
                        <input type='text' />
                    </div>
                </div>
                <div className={styles.content__row}>
                    <div className={styles.content__row_item}>
                        <div>ТЕЛЕФОН*</div>
                        <input type='text' />
                    </div>
                    <div className={styles.content__row_item}>
                        <div>ГОРОД*</div>
                        <input type='text' />
                    </div>
                </div>
                <div className={styles.setting__button}>Изменить пароль</div>
                <div className={styles.setting__button}>Мой адрес</div>
                <div className={styles.setting__button}>Изменить аватар</div>
                <div className={styles.setting__button}>Изменить банковские реквизиты</div>
            </div>
            <div className={styles.buttons}>
                <NavLink to='/profile'>
                    <button className={styles.btn}>Изменить</button>
                </NavLink>
                <NavLink to='/home'>
                    <button className={styles.btn_gray}>Выйти из личного кабинета</button>
                </NavLink>

            </div>
        </div>
    )
}

export default ProfileSettings