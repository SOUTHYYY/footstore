import React from 'react'
import ItemListContainer from '../container-components/item-list-container'
import Banner from '../banner/banner'
import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <Banner />
            <ItemListContainer />
        </div>
    )
}


export default Home
