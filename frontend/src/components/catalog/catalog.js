import React, { useState } from 'react'
import Item from '../item/item'
import styles from './catalog.module.css'
import down_arrow from '../../images/catalog-images/down-arrow.svg'
import left_arrow from '../../images/catalog-images/left-arrow.svg'
import { filterItems } from '../../consts/titles'


const Catalog = ({ data, requestSortedPosts, totalCount, filter, filterButtons, sort }) => {
    const [brands, setBrands] = useState(true)
    const [models, setModels] = useState(true)
    const [sizes, setSizes] = useState(true)

    let dataList = data.map(item => {
        return (
            <Item key={item._id} post={item} />
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

    const brandsItems = brands ? (
        <div className={styles.filter__scrollview}>
            {filterItems.brands.map(item => {
                return (
                    <div key={item} className={styles.filter__scrollview_row}>
                        <input type="checkbox" />
                        <span>{item}</span>
                    </div>
                )
            })}

        </div>
    ) : null
    const sizesItems = sizes ? (
        <div className={styles.filter__scrollview}>
            {filterItems.sizes.map(item => {
                return (
                    <div key={item} className={styles.filter__scrollview_row}>
                        <input type="checkbox" />
                        <span>US {item}</span>
                    </div>
                )
            })}

        </div>
    ) : null
    const modelsItems = models ? (
        <div className={styles.filter__scrollview}>
            {filterItems.models.map(item => {
                return (
                    <div key={item} className={styles.filter__scrollview_row}>
                        <input type="checkbox" />
                        <span>{item}</span>
                    </div>
                )
            })}

        </div>
    ) : null




    // TODO:
    // onClick = {() => setByDate()}
    // onClick={() => setFromHighPrice()}


    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__header}>
                {buttons}
            </div>
            <div className={styles.catalog__content}>
                <div className={styles.catalog__content_infoline}>
                    <div>{totalCount} товара</div>
                    <div className={styles.catalog__content_sort}>
                        <div>Сортировать по</div>
                        <select onChange={(e) => sort(e.target.value)}>
                            <option value="A">ДАТА</option>
                            <option value="B">ЦЕНА ↓</option>
                            <option value="C">ЦЕНА ↑</option>
                        </select>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.catalog__content_list}>{dataList}</div>
                    <div className={styles.catalog__content_filter}>
                        <div className={styles.filter__header}>
                            <div
                                onClick={() => setModels(models ? false : true)}
                                className={styles.filter__header_header}>
                                <img src={models ? down_arrow : left_arrow} alt='arrow'></img>
                                <div>Модели</div>
                            </div>
                            {modelsItems}
                        </div>
                        <div className={styles.filter__header}>
                            <div
                                onClick={() => setBrands(brands ? false : true)}
                                className={styles.filter__header_header}>
                                <img src={brands ? down_arrow : left_arrow} alt='arrow'></img>
                                <div>Бренды</div>
                            </div>
                            {brandsItems}
                        </div>
                        <div className={styles.filter__header}>
                            <div
                                onClick={() => setSizes(sizes ? false : true)}
                                className={styles.filter__header_header}>
                                <img src={sizes ? down_arrow : left_arrow} alt='arrow'></img>
                                <div>Размеры</div>
                            </div>
                            {sizesItems}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}



export default Catalog