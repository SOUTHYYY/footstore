import React from 'react';
import { requestPosts } from '../../redux/actions/posts-actions';
import { connect } from 'react-redux'
import ItemList from '../items/item-list';
import Preloader from '../common/preloader'
import styles from '../items/item-list.module.css'
import ErrorIndicator from '../error-indicator/error-indicator';


class ItemListContainer extends React.Component {
    state = {
        error: false
    }
    componentDidMount() {
        this.props.requestPosts()
    }
    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        const { loading } = this.props
        const { error } = this.state
        if (loading) {
            return <div className={styles.preloader}><Preloader /></div>
        }
        if (error) {
            return <div className={styles.preloader}><ErrorIndicator /></div>
        }
        const posts = this.props.data.slice(0, 4)
        return (
            <ItemList posts={posts} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.posts.posts,
    loading: state.posts.loading
})

export default connect(mapStateToProps, { requestPosts })(ItemListContainer)