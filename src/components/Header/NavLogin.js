import React from 'react';
import { Link } from 'react-router-dom';

function NavLogin({ userName, userPhoto, handleLogout }) {
    return (
        <>
            {!userName ? (
                <Link
                    to='/signin'
                    className='btn btn-outline-primary text_bold'
                    style={{ minWidth: '100px' }}
                >
                    Đăng nhập
                </Link>
            ) : (
                <>
                    <button
                        className='btn btn-outline-danger teext_bold'
                        style={{ minWidth: '100px' }}
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                    <img
                        title={userName}
                        src={`${userPhoto}`}
                        onError={(e) =>
                            (e.target.src =
                                'https://images.unsplash.com/photo-1651980662072-4c18b13228d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=2000')
                        }
                        alt={`avatar-user-${userName}`}
                        className='avatar-user ml-2'
                    />
                </>
            )}
        </>
    );
}

export default NavLogin;
