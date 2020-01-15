import React from 'react'
import styles from './item-card.module.css'

const ItemCard = ({ post }) => {
    const { name, brand, color, images, starting_price, description } = post

    const desc = description.length === 0 ?
        null :
        (<div className={styles.item__description}>
            <h1>Описание</h1>
            {description}
        </div>)
    return (
        <div className={styles.item__wrapper}>
            <div className={styles.item}>
                <div className={styles.item__header}>
                    <div className={styles.item__header_carousel}>
                        <img src={images[0]} alt='item'></img>
                    </div>
                    <div className={styles.item__header_info}>
                        <div className={styles.header__info_container}>
                            <div className={styles.brand}>{brand} </div>
                            <div className={styles.model}>{name}</div>
                            <div className={styles.color}>{color}</div>
                            <button className={styles.btn}> Купить от {starting_price} Р</button>
                        </div>
                    </div>
                </div>
                {desc}
                <div className={styles.item__footer}>
                    <div className={styles.item__footer_info}>
                        <div className={styles.model__table}>
                            <div className={styles.model__table_row}>
                                <div className={styles.model__table_lable}>БРЕНД</div>
                                <div className={styles.model__table_value}> {brand} </div>
                            </div>
                            <div className={styles.model__table_row}>
                                <div className={styles.model__table_lable}>МОДЕЛЬ</div>
                                <div className={styles.model__table_value}>{name}</div>
                            </div>
                            <div className={styles.model__table_row}>
                                <div className={styles.model__table_lable}>РАСЦВЕТКА</div>
                                <div className={styles.model__table_value}>{color}</div>
                            </div>
                            <div className={styles.model__table_row}>
                                <div className={styles.model__table_lable}>ДАТА РЕЛИЗА</div>
                                <div className={styles.model__table_value}>2019-12-21 00:00</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item__footer_values}>
                        <h1>1231231</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
