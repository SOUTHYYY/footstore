import React from 'react';
import styles from './item-list.module.css'
import Item from '../item/item';



const ItemList = props => {

    const postsList = props.posts.map(item => {
        return <Item key={item.color} post={item} />
    })

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
                    {postsList}
                </div>
            </div>

        </div>
    )
}


export default ItemList