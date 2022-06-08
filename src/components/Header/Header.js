import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogout,
} from '../../features/user/userSlice';
import { auth } from '../../firebase';
import {
    NavLogo,
    NavDisneyPlus,
    NavParkAndTravel,
    NavMovies,
    NavShop,
    NavMore,
    NavLogin,
    NavToggle,
} from '../';
function Header() {
    //redux-toolkit
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const history = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        auth.signOut()
            .then(() => {
                dispatch(setUserLogout());
                history('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className={`${clsx(styles.header)}`}>
            <nav
                className={`${clsx(
                    styles.bg_custom
                )} navbar navbar-expand-lg navbar-dark bg-dark`}
            >
                <NavLogo />
                <NavToggle />
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto text_bold'>
                        {userName && (
                            <>
                                <NavDisneyPlus />
                                <NavParkAndTravel />
                                <NavMovies />
                                <NavShop />
                                <NavMore />
                            </>
                        )}
                    </ul>
                    <form className='form-inline my-2 my-lg-0'>
                        <NavLogin
                            userName={userName}
                            userPhoto={userPhoto}
                            handleLogout={handleLogout}
                        />
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;
