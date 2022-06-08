import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        loop: true,
        className: 'center',
        centerMode: true,
        centerPadding: '60px',
    };
    return (
        <div className={`${clsx(styles.slider)}`}>
            <Slider {...settings}>
                <div className={`${clsx(styles.slider_item)}`}>
                    <div className={`${clsx(styles.slider_image_1)}`}></div>
                </div>
                <div className={`${clsx(styles.slider_item)}`}>
                    <div className={`${clsx(styles.slider_image_2)}`}></div>
                </div>
                <div className={`${clsx(styles.slider_item)}`}>
                    <div className={`${clsx(styles.slider_image_3)}`}></div>
                </div>
                <div className={`${clsx(styles.slider_item)}`}>
                    <div className={`${clsx(styles.slider_image_4)}`}></div>
                </div>
            </Slider>
        </div>
    );
}

export default ImageSlider;
