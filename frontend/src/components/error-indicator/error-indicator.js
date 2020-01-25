import React from 'react'
import styles from './error-indicator.module.css'
import error_image from '../../images/common-images/error-indicator.png'

const ErrorIndicator = () => {
    return (
        <div className={styles.error_indicator}>
            <img src={error_image} alt='error'></img>
            <h2>Упс, что-то пошло не так...<br/>
                Мы уже над этим работаем!</h2>
        </div>
    )
}

export default ErrorIndicator
