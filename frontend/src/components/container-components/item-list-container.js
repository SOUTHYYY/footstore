import React from 'react';
import { requestPosts } from '../../redux/actions/posts-actions';
import { connect } from 'react-redux'
import ItemList from '../items/item-list';
import Preloader from '../common/preloader'
import styles from '../items/item-list.module.css'


class ItemListContainer extends React.Component {
    componentDidMount() {
        this.props.requestPosts()
    }

    render() {
        if (this.props.loading) {
            return (
                <div className={styles.preloader}>
                    <Preloader />
                </div>
            )
        }
        return (
            <ItemList posts={this.props.data} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.posts.posts,
    loading: state.posts.loading
})

export default connect(mapStateToProps, { requestPosts })(ItemListContainer)