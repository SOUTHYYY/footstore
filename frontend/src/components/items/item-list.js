import React from 'react';
import styles from './item-list.module.css'
import Item from '../item/item';


const ItemList = props => {
    const data = [
        {
            image: 'https://ns.imgix.net/product/1577762871902_azael.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=90',
            brand: 'Adidas',
            model: 'YEZZY 700 V3',
            color: 'AZAEL',
            price: '45000'
        },
        {
            image: 'https://api.outofstock.cc/media/537415_01.jpg.jpeg',
            brand: 'NIKE X OFF-WHITE',
            model: 'DUNK LOW',
            color: 'PINE GREEN',
            price: '40000'
        },
        {
            image: 'https://api.outofstock.cc/media/1_jGW0xRc.jpeg',
            brand: 'Adidas',
            model: 'YEEZY 500 HIGH SLATE',
            color: 'SLATE',
            price: '20000'
        },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__wrapper}>
                <div className={styles.wrapper__title}>
                    <h1>Новое</h1>
                    <div className={styles.wrapper__title_types}>
                        <div className={styles.active}>Обувь</div>
                        <div>Одежда</div>
                        <div>Аксессуары</div>
                    </div>
                </div>
                <div className={styles.wrapper__list}>
                    {data.map(item => (
                        <Item key={item.model} data={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ItemList