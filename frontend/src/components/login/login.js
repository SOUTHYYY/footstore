import React from 'react';
import styles from './login.module.css'
import { NavLink } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { login } from "../../redux/actions/login-actions";
// import {Field, reduxForm} from 'redux-form'
import {LoginAPI} from '../../API/api'

const Login = props => {
    // const onSubmit = (formData) => {
    //     login(formData.email, formData.password)

    //     if (isAuth) {
    //         return <Redirect to={'/profile'} />
    //     }
    // }
    LoginAPI.login()
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

// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth
// })

// export default connect(mapStateToProps, { login })(Login)

export default Login