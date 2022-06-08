import React from 'react';
import { Link } from 'react-router-dom';

function NavShop() {
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
                SHOP
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/sale'>
                    Sale
                </Link>
                <Link className='dropdown-item' to='/clothes'>
                    Clothes
                </Link>
                <Link className='dropdown-item' to='/accessories'>
                    Accessories
                </Link>
                <Link className='dropdown-item' to='/toys'>
                    Toys
                </Link>
                <Link className='dropdown-item' to='/shop-all'>
                    Shop All
                </Link>
            </div>
        </li>
    );
}

export default NavShop;
