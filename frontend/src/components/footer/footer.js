import React from 'react';
import styles from './footer.module.css'

const Footer = props => {
    return (
        <footer>
            <div className={styles.footer__header}>
                <h2>SOUTHYYY</h2>
                <span>leshka.l1337@gmail.com</span>
            </div>
            <div className={styles.footer__section}>
                <div className={styles.footer__section_header}>
                    <h2>КАТАЛОГ</h2>
                    <h2>ПЛАТФОРМА</h2>
                </div>
                <div className={styles.footer__section_content}>
                    <div>
                        <span className={styles.footer__section_item}>Обувь</span>
                        <span className={styles.footer__section_item}>Одежда</span>
                        <span className={styles.footer__section_item}>Аксессуары</span>
                    </div>
                    <div>
                        <span className={styles.footer__section_item}>Правила продажи</span>
                        <span className={styles.footer__section_item}>Последние релизы</span>
                        <span className={styles.footer__section_item}>Контакты</span>
                    </div>
                </div>
            </div>
            <div className={styles.footer__footer}>
                
            </div>
        </footer>
    )
}


export default Footer