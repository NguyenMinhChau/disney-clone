import React from 'react';
import clsx from 'clsx';
import styles from './Login.module.css';

function LoginTop() {
    return (
        <div className={`${clsx(styles.login_top)}`}>
            <div className='row h-100'>
                <div className='col-12 col-sm-12'>
                    <div className={`${clsx(styles.login_image_top)}`}></div>
                </div>
            </div>
        </div>
    );
}

export default LoginTop;
