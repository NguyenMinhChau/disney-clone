import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './DetailMovie.module.css';

function DetailItemTimer({ data }) {
    return (
        <div className={`${clsx(styles.detailMovie_timer)} mt-3`}>
            <p className='badge badge-primary mb-1'>SubTitle</p>
            <span className='ml-2'>
                <Link to='/home' className='badge badge-danger text-bold'>
                    Về trang chủ{' '}
                    <span className='ml-1'>
                        <i class='fa-solid fa-arrow-right'></i>
                    </span>
                </Link>
            </span>
            <p className={`${clsx(styles.detailMovie_timer_text)} text_bold`}>
                {data.subTitle}
            </p>
        </div>
    );
}

export default DetailItemTimer;
