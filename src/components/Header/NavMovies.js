import React from 'react';
import { Link } from 'react-router-dom';

function NavMovies() {
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
                MOVIES
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/movies-anywhere'>
                    Movies Anywhere
                </Link>
                <Link className='dropdown-item' to='/all-movies'>
                    All Movies
                </Link>
                <Link className='dropdown-item' to='/disney-movie-club'>
                    Disney Movie Club
                </Link>
                <Link className='dropdown-item' to='/disney-movie-insiders'>
                    Disney Movie Insiders
                </Link>
                <Link className='dropdown-item' to='/20th-century-studios'>
                    20th Century Studios
                </Link>
            </div>
        </li>
    );
}

export default NavMovies;
