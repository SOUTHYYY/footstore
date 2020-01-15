import React from 'react';
import preloader from '../../images/common-images/preloader.svg'
import styles from './preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt='preloader'></img>
        </div>
    )
}

export default Preloader

