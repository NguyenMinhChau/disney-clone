import React from 'react';
import clsx from 'clsx';
import styles from './DetailMovie.module.css';

function DetailItemDescription({ data }) {
    return (
        <div className={`${clsx(styles.detailMovie_description)} mt-3`}>
            <p className='badge badge-danger mb-1'>Description</p>
            <p
                title={data.description}
                className={`${clsx(styles.detailMovie_description_text)}`}
            >
                {data.description}
            </p>
        </div>
    );
}

export default DetailItemDescription;
