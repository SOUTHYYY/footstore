import React from 'react';
import styles from './item.module.css'
import { NavLink, Route } from 'react-router-dom'

const Item = ({ data }) => {
    const { image, brand, model, color, price } = data

    return (
        <NavLink to='/item' className={styles.item}>
            <div className={styles.item__container}>
                <div className={styles.item__image}>
                    <img src={image}></img>
                </div>

                <div className={styles.item__desc}>
                    <div>
                        <div className={styles.item__desc_brand}>{brand}</div>
                        <div className={styles.item__desc_model}>{model}</div>
                        <div className={styles.item__desc_color}>{color}</div>
                    </div>
                    <div className={styles.item__desc_price}>{price} ₽</div>

                </div>
            </div>
        </NavLink>
    )
}


export default Item