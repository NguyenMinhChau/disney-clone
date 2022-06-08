import React from 'react';
import { Link } from 'react-router-dom';

function NavParkAndTravel() {
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
                PARKS & TRAVEL
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/walt-disney-world-resorts'>
                    Walt Disney World Resorts
                </Link>
                <Link className='dropdown-item' to='/disneyland-resort'>
                    Disneyland Resort
                </Link>
                <Link className='dropdown-item' to='/disney-cruise-line'>
                    Disney Cruise Line
                </Link>
                <Link
                    className='dropdown-item'
                    to='/aulani-a-disney-resort-and-spa'
                >
                    Aulani - A Disney Resort and Spa
                </Link>
                <Link className='dropdown-item' to='/adventures-by-disney'>
                    Adventures by Disney
                </Link>
                <Link className='dropdown-item' to='/disney-vacation-club'>
                    Disney Vacation Club
                </Link>
            </div>
        </li>
    );
}

export default NavParkAndTravel;
