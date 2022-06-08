import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import clsx from 'clsx';
import styles from './Register.module.css';
import LogoDisney from './image/logo.svg';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setUserLoginDetails } from '../../features/user/userSlice';

function Register() {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const [errorRegister, setErrorRegister] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useNavigate();
    const dispatch = useDispatch();
    const handleChangeValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (
            inputValue.email !== '' &&
            inputValue.password !== '' &&
            inputValue.passwordConfirm !== ''
        ) {
            if (inputValue.password === inputValue.passwordConfirm) {
                //xử lý đăng ký lưu vào db
                auth.createUserWithEmailAndPassword(
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
                    .catch(() => setErrorRegister('Tài khoản này đã tồn tại'));
            } else {
                setErrorRegister('Mật khẩu không trùng khớp');
            }
        } else {
            if (emailRef.current.value === '') {
                emailRef.current.focus();
                setErrorRegister('Vui lòng nhập email');
            } else if (passwordRef.current.value === '') {
                passwordRef.current.focus();
                setErrorRegister('Vui lòng nhập mật khẩu');
            } else if (passwordConfirmRef.current.value === '') {
                passwordConfirmRef.current.focus();
                setErrorRegister('Vui lòng nhập xác nhận mật khẩu');
            }
        }
    };
    const responseGoogle = (res) => {
        if (res.profileObj) {
            //xử lý register google lưu vào db
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
    return (
        <div className={`${clsx(styles.register_container)}`}>
            <div className={`${clsx(styles.register_form)}`}>
                <div className={`${clsx(styles.register_logo)} mb-3`}>
                    <Link to='/'>
                        <img
                            src={LogoDisney}
                            alt='logo'
                            className={`${clsx(styles.register_logo_amazon)}`}
                        />
                    </Link>
                </div>
                <h4
                    className={`${clsx(
                        styles.register_text
                    )} mb-4 text-dark text_bold`}
                >
                    Đăng ký
                </h4>
                {errorRegister && (
                    <p
                        className={`${clsx(
                            styles.register_error
                        )} text-center alert alert-danger`}
                    >
                        {errorRegister}
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
                    <div className='form-group'>
                        <label htmlFor='password'>Xác nhận mật khẩu</label>
                        <input
                            type='password'
                            className='form-control'
                            id='passwordConfirm'
                            name='passwordConfirm'
                            placeholder='Xác nhận mật khẩu'
                            value={inputValue.passwordConfirm}
                            onChange={handleChangeValue}
                            ref={passwordConfirmRef}
                        />
                    </div>
                    <button
                        type='submit'
                        className={`${clsx(styles.btn_custom)} btn w-100`}
                        onClick={handleSubmitRegister}
                    >
                        Đăng ký
                    </button>
                    <hr />
                    <GoogleLogin
                        className={`${clsx(
                            styles.btn_custom,
                            styles.btn_social_google
                        )} btn w-100 justify-content-center mt-2`}
                        clientId='960280042362-41a0urkk5896gbnpcqdsm5inm7o4a5lv.apps.googleusercontent.com'
                        buttonText='Đăng ký bằng Google'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        prompt='select_account consent'
                    ></GoogleLogin>
                </form>
                <div className={`${clsx(styles.register)} mt-2 text-dark`}>
                    Bạn đã có tài khoản?{' '}
                    <Link
                        to='/signin'
                        className={`${clsx(styles.link_register)}`}
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
