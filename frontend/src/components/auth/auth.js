import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './auth.module.css'

const Auth = props => {
    return (
        <div className={styles.login}>
            <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
            <form>
                <div className={styles.login__field_wrapper}>
                    <div>Е-mail или логин</div>
                    <input></input>
                </div>
                <div className={styles.login__field_wrapper}>
                    <div>Пароль</div>
                    <input></input>
                </div>
                <button>Войти в линый кабинет</button>
            </form>
            <NavLink to='/forgot-password' className={styles.forgot_password} >Забыли пароль?</NavLink>
        </div>
    )
}


export default Auth