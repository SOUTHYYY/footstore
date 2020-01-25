import React from 'react';
import { requestCurrentPost } from '../../redux/actions/item-card-actions';
import { connect } from 'react-redux'
import Preloader from '../common/preloader'
import styles from '../item-card/item-card.module.css'
import ItemCard from '../item-card/item-card';
import ErrorIndicator from '../error-indicator/error-indicator';


class ItemCardContainer extends React.Component {
    state = {
        error: true
    }
    componentWillMount() {
        console.log('props', this.props)
        const { id, requestCurrentPost } = this.props
        requestCurrentPost(id)

    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        const { data, loading } = this.props
        console.log('LOADING', loading)
        const { error } = this.state
        if (loading) {
            return (
                <div className={styles.preloader}>
                    <Preloader />
                </div>
            )
        }
        if (error) {
            return (
                <div className={styles.preloader}>
                    <ErrorIndicator />
                </div>
            )
        }
        return <ItemCard post={data} />
    }
}

const mapStateToProps = (state) => ({
    data: state.card.post,
    loading: state.card.loading
})

export default connect(mapStateToProps, { requestCurrentPost })(ItemCardContainer)