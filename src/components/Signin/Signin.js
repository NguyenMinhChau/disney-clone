import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './Signin.module.css';
import LogoDisney from './image/logo.svg';
import { auth, provider } from '../../firebase';
import { setUserLoginDetails } from '../../features/user/userSlice';

function Signin() {
    const [inputValue, setInputValue] = useState({ email: '', password: '' });
    const [errorSignin, setErrorSignin] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useNavigate();
    //redux-toolkit
    const dispatch = useDispatch();
    const handleChangeValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };
    const handleSubmitSignin = (e) => {
        e.preventDefault();
        if (inputValue.email !== '' && inputValue.password !== '') {
            //xử lý login
            auth.signInWithEmailAndPassword(
                inputValue.email,
                inputValue.password
            )
                .then((auth) => {
                    //successfully
                    if (auth) {
                        dispatch(
                            setUserLoginDetails({
                                name: inputValue.email,
                                email: inputValue.email,
                                photo: 'https://images.unsplash.com/photo-1652593471606-45e7cf3bcd1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=2000',
                            })
                        );
                        history('/home');
                    }
                })
                .catch(() => setErrorSignin('Tài khoản không tồn tại'));
        } else {
            if (emailRef.current.value === '') {
                emailRef.current.focus();
                setErrorSignin('Vui lòng nhập email');
            } else {
                passwordRef.current.focus();
                setErrorSignin('Vui lòng nhập mật khẩu');
            }
        }
    };
    const responseGoogle = (res) => {
        if (res.profileObj) {
            //xử lý login google lưu vào db
            alert(
                'Chức năng đang hoàn thiện' +
                    '\n' +
                    '-------------------------' +
                    '\n' +
                    'Tên: ' +
                    res.profileObj.givenName +
                    ' ' +
                    res.profileObj.familyName +
                    '\n' +
                    'Email: ' +
                    res.profileObj.email +
                    '\n' +
                    'Google ID: ' +
                    res.profileObj.googleId
            );
        }
    };
    const handleAuthFirebase = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then((result) => {
                if (result) {
                    //xử lý login google firebase lưu vào db - dùng redux-toolkit
                    dispatch(
                        setUserLoginDetails({
                            name: result.user.displayName,
                            email: result.user.email,
                            photo: result.user.photoURL,
                        })
                    );
                    history('/home');
                }
            })
            .catch((error) => {
                setErrorSignin(error.message);
            });
    };
    return (
        <div className={`${clsx(styles.signin_container)}`}>
            <div className={`${clsx(styles.signin_form)}`}>
                <div className={`${clsx(styles.signin_logo)} mb-3`}>
                    <Link to='/'>
                        <img
                            src={LogoDisney}
                            alt='logo'
                            className={`${clsx(styles.signin_logo_amazon)}`}
                        />
                    </Link>
                </div>
                <h4
                    className={`${clsx(
                        styles.signin_text
                    )} mb-4 text-dark text_bold`}
                >
                    Đăng nhập
                </h4>
                {errorSignin && (
                    <p
                        className={`${clsx(
                            styles.signin_error
                        )} text-center alert alert-danger`}
                    >
                        {errorSignin}
                    </p>
                )}
                <form className='text-dark'>
                    <div className='form-group'>
                        <label htmlFor='email'>Địa chỉ Email</label>
                        <input
                            type='text'
                            className='form-control'
                            id='email'
                            name='email'
                            placeholder='Nhập email'
                            value={inputValue.email}
                            onChange={handleChangeValue}
                            ref={emailRef}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Mật khẩu</label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            placeholder='Mật khẩu'
                            value={inputValue.password}
                            onChange={handleChangeValue}
                            ref={passwordRef}
                        />
                    </div>
                    <button
                        type='submit'
                        className={`${clsx(styles.btn_custom)} btn w-100`}
                        onClick={handleSubmitSignin}
                    >
                        Đăng nhập
                    </button>
                    <hr />
                    <button
                        type='submit'
                        className={`${clsx(styles.btn_custom)} btn w-100`}
                        onClick={handleAuthFirebase}
                    >
                        Đăng nhập bằng Google Firebase
                    </button>
                    <GoogleLogin
                        className={`${clsx(
                            styles.btn_custom,
                            styles.btn_social_google
                        )} btn w-100 justify-content-center mt-2`}
                        clientId='960280042362-41a0urkk5896gbnpcqdsm5inm7o4a5lv.apps.googleusercontent.com'
                        buttonText='Đăng nhập bằng Google'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        prompt='select_account consent'
                    ></GoogleLogin>
                </form>
                <div className={`${clsx(styles.register)} mt-2 text-dark`}>
                    Bạn chưa có tài khoản?{' '}
                    <Link
                        to='/register'
                        className={`${clsx(styles.link_register)}`}
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
