import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function NavLogo() {
    return (
        <Link className='navbar-brand text_bold' to='/home'>
            <div className={`${clsx(styles.header_logo)}`}></div>
        </Link>
    );
}

export default NavLogo;
