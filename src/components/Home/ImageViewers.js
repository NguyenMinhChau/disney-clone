import React from 'react';
import clsx from 'clsx';
import styles from './Home.module.css';
import VideoDisney from './video/1564674844-disney.mp4';
import VideoMarvel from './video/1564676115-marvel.mp4';
import VideoNational from './video/1564676296-national-geographic.mp4';
import VideoPixar from './video/1564676714-pixar.mp4';
import VideoStarWars from './video/1608229455-star-wars.mp4';

function ImageViewers() {
    return (
        <div className={`${clsx(styles.image_viewer)}`}>
            <div className={`${clsx(styles.viewer_item)}`}>
                <div className={`${clsx(styles.viewer_item_1)}`}></div>
                <div className={`${clsx(styles.viewer_item_1_video)}`}>
                    <video autoPlay={true} loop={true} muted>
                        <source src={VideoDisney} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div className={`${clsx(styles.viewer_item)}`}>
                <div className={`${clsx(styles.viewer_item_2)}`}></div>
                <div className={`${clsx(styles.viewer_item_1_video)}`}>
                    <video autoPlay={true} loop={true} muted>
                        <source src={VideoMarvel} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div className={`${clsx(styles.viewer_item)}`}>
                <div className={`${clsx(styles.viewer_item_3)}`}></div>
                <div className={`${clsx(styles.viewer_item_1_video)}`}>
                    <video autoPlay={true} loop={true} muted>
                        <source src={VideoNational} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div className={`${clsx(styles.viewer_item)}`}>
                <div className={`${clsx(styles.viewer_item_4)}`}></div>
                <div className={`${clsx(styles.viewer_item_1_video)}`}>
                    <video autoPlay={true} loop={true} muted>
                        <source src={VideoPixar} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div className={`${clsx(styles.viewer_item)}`}>
                <div className={`${clsx(styles.viewer_item_5)}`}></div>
                <div className={`${clsx(styles.viewer_item_1_video)}`}>
                    <video autoPlay={true} loop={true} muted>
                        <source src={VideoStarWars} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ImageViewers;
