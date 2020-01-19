import React from 'react'
import Item from '../item/item'
import styles from './catalog.module.css'


const Catalog = ({ data, requestSortedPosts, totalCount, filter, filterButtons }) => {
    let dataList = data.map(item => {
        return (
            <div key={item.id} className={styles.item}>
                <Item post={item} />
            </div>
        )
    })

    const buttons = filterButtons.map(({ name, label }) => {
        const isActive = name === filter;
        const classNames = isActive ? `${styles.catalog__header_active}` : `${styles.catalog__header_default}`;

        return (
            <h1 className={classNames} onClick={() => requestSortedPosts(name)} key={name}>
                {label}
            </h1>)

    })


    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__header}>
                {buttons}
            </div>
            <div className={styles.catalog__content}>
                <div className={styles.catalog__content_infoline}>
                    <div>{totalCount} товар</div>
                    <div>Сортировать по</div>
                </div>
                <div className={styles.table}>
                    <div className={styles.catalog__content_list}>{dataList} {dataList} {dataList}</div>
                    <div className={styles.catalog__content_filter}></div>
                </div>

            </div>
        </div>
    )
}



export default Catalog