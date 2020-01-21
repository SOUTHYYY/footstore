import React from 'react';
import styles from './item.module.css'
import { NavLink } from 'react-router-dom'

const Item = ({ post }) => {
    const { name, starting_price, brand, images, color, _id } = post

    return (
        <NavLink to={`/item/${_id}`} className={styles.item}>
            <div className={styles.item__image}>
                <img src={images[0]} alt='item'></img>
            </div>
            <div className={styles.item__desc}>
                <div>
                    <div className={styles.item__desc_brand}>{brand}</div>
                    <div className={styles.item__desc_model}>{name}</div>
                    <div className={styles.item__desc_color}>{color}</div>
                </div>
                <div className={styles.item__desc_price}>{starting_price} ₽</div>
            </div>
        </NavLink>
    )
}


export default Item