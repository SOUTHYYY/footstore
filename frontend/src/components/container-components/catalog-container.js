import React, { Component } from 'react'
import Preloader from '../common/preloader'
import { connect } from 'react-redux'
import { requestSortedPosts } from '../../redux/actions/catalog-actions'
import Catalog from '../catalog/catalog'

class CatalogContainer extends Component {
    componentWillMount() {
        this.props.requestSortedPosts('Sneakers')
    }
    render() {
        const { data, loading, totalCount, requestSortedPosts, filter, filterButtons } = this.props
        if (loading) {
            return <Preloader />
        }
        return (
            <Catalog
                data={data}
                requestSortedPosts={requestSortedPosts}
                totalCount={totalCount}
                filter={filter}
                filterButtons={filterButtons} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.catalog.post,
    loading: state.catalog.loading,
    totalCount: state.catalog.totalCount,
    filter: state.catalog.filter,
    filterButtons: state.catalog.filterButtons
})

export default connect(mapStateToProps, { requestSortedPosts })(CatalogContainer)