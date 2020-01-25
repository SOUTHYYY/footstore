import React, { Component } from 'react'
import Preloader from '../common/preloader'
import { connect } from 'react-redux'
import { requestSortedPosts, sort } from '../../redux/actions/catalog-actions'
import Catalog from '../catalog/catalog'
import styles from '../catalog/catalog.module.css'
import ErrorIndicator from '../error-indicator/error-indicator'

class CatalogContainer extends Component {
    state = {
        error: false
    }
    componentWillMount() {
        this.props.requestSortedPosts('Sneakers')
    }
    componentDidCatch() {
        this.setState({ error: true })
    }
    render() {
        const { data, loading, totalCount, requestSortedPosts, filter, filterButtons, sort } = this.props
        const {error} = this.state
        if (loading) {
            return <div className={styles.preloader}><Preloader /></div>
        }
        if (error) {
            return <div className={styles.preloader}><ErrorIndicator /></div>
        }
        return (
            <Catalog
                data={data}
                requestSortedPosts={requestSortedPosts}
                totalCount={totalCount}
                filter={filter}
                filterButtons={filterButtons}
                sort={sort} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.catalog.posts,
    loading: state.catalog.loading,
    totalCount: state.catalog.totalCount,
    filter: state.catalog.filter,
    filterButtons: state.catalog.filterButtons
})

export default connect(mapStateToProps, { requestSortedPosts, sort })(CatalogContainer)