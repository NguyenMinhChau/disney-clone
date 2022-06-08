/* eslint-disable no-useless-concat */
import React from 'react';
import clsx from 'clsx';
import styles from './DetailMovie.module.css';

function DetailItemCardImage({ data }) {
    return (
        <div
            title={data.title}
            className={`${clsx(styles.detailMovie__card_image)}`}
            style={{
                backgroundImage: 'url(' + `${data.titleImg}` + ')',
                backgroundPosition: 'center center',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        ></div>
    );
}

export default DetailItemCardImage;
