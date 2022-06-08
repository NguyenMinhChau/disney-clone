import React from 'react';
import { Link } from 'react-router-dom';

function NavMore() {
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
                MORE
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/disney-news'>
                    Disney News
                </Link>
                <Link
                    className='dropdown-item'
                    to='/d23-the-official-disney-fan-club'
                >
                    D23: The Official Disney Fan Club
                </Link>
                <Link className='dropdown-item' to='/live-shows'>
                    Live Shows
                </Link>
            </div>
        </li>
    );
}

export default NavMore;
