import React from 'react';
import { Link } from 'react-router-dom';

function NavDisneyPlus() {
    return (
        <li className='nav-item dropdown'>
            <a
                className='nav-link dropdown-toggle'
                href='##'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
            >
                DISNEY+
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/home'>
                    Home Page
                </Link>
                <Link className='dropdown-item' to='/disney-originals'>
                    Disney+ Originals
                </Link>
                <Link className='dropdown-item' to='/the-disney-bundle'>
                    The Disney Bundle
                </Link>
            </div>
        </li>
    );
}

export default NavDisneyPlus;
