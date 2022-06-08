import React from 'react';
import clsx from 'clsx';
import styles from './Login.module.css';
import { LoginTop, LoginMiddle, LoginBottom } from '../';

function Login() {
    return (
        <div className={`${clsx(styles.login)}`}>
            <div className={`${clsx(styles.login_image)}`}></div>
            <div
                className={`${clsx(
                    styles.login_absolute
                )} container-fluid d-flex align-items-center justify-content-center`}
            >
                <div className={`${clsx(styles.login_width_custom)}`}>
                    <LoginTop />
                    <LoginMiddle />
                    <LoginBottom />
                </div>
            </div>
        </div>
    );
}

export default Login;
