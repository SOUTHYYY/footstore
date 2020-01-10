import React from "react";
import Slider from "react-slick";
import styles from './carousel.module.css'
import Item from "../item/item";

class SimpleSlider extends React.Component {
    render() {
        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };
        return (
            <div className={styles.carousel}>
                <Slider {...settings}>
                    <div>
                        <div>1</div>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider