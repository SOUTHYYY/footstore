import React from 'react';
import { requestCurrentPost } from '../../redux/actions/item-card-actions';
import { connect } from 'react-redux'
import Preloader from '../common/preloader'
import styles from '../item-card/item-card.module.css'
import ItemCard from '../item-card/item-card';


class ItemCardContainer extends React.Component {
    state = {
        error: false
    }
    componentDidMount() {
        this.props.requestCurrentPost(this.props.id)
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        const { error, data, loading } = this.props
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
                    Упс... что-то пошло не так...
                </div>
            )
        }
        return (
            <ItemCard post={data} />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.card.post,
    loading: state.card.loading
})

export default connect(mapStateToProps, { requestCurrentPost })(ItemCardContainer)