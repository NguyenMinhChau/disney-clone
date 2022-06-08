import React from 'react';
import clsx from 'clsx';
import styles from './Login.module.css';

function LoginMiddle() {
    return (
        <div className={`${clsx(styles.login_middle)} mt-2`}>
            <button className={`${clsx(styles.btn_custom)} text_bold`}>
                GET ALL THERE
            </button>
            <div className={`${clsx(styles.middle_text_container)} mt-2`}>
                <span className={`${clsx(styles.middle_text)}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis iste voluptate minima nam vel assumenda animi
                    laborum saepe beatae ad possimus explicabo natus earum totam
                    ipsum vitae commodi, praesentium tempore.
                </span>
            </div>
        </div>
    );
}

export default LoginMiddle;
