import React from 'react';
import clsx from 'clsx';
import styles from './Login.module.css';

function LoginBottom() {
    return (
        <div className={`${clsx(styles.login_bottom)} mt-2`}>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_1)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_6)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_2)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_6)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_3)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_6)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_4)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_6)}`}></div>
            </div>
            <div className={`${clsx(styles.bottom_item)}`}>
                <div className={`${clsx(styles.bottom_item_5)}`}></div>
            </div>
        </div>
    );
}

export default LoginBottom;
