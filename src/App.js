import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Login,
    Header,
    Footer,
    Home,
    DetailMovieRecommends,
    DetailMovieNewDisney,
    DetailMovieOriginal,
    DetailMovieTrending,
    NotFound,
    Signin,
    Register,
} from './components';
import './App.css';
import { auth } from './firebase';
import {
    setUserLoginDetails,
    setUserLogout,
} from '../src/features/user/userSlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(
                    setUserLoginDetails({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                    })
                );
            } else {
                dispatch(setUserLogout());
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={[<Header />, <Login />, <Footer />]} />
                <Route
                    path='/home'
                    element={[<Header />, <Home />, <Footer />]}
                />
                <Route
                    path='/recommend-movie-detail/:id'
                    element={[
                        <Header />,
                        <DetailMovieRecommends />,
                        <Footer />,
                    ]}
                />
                <Route
                    path='/new-disney-movie-detail/:id'
                    element={[<Header />, <DetailMovieNewDisney />, <Footer />]}
                />
                <Route
                    path='/original-movie-detail/:id'
                    element={[<Header />, <DetailMovieOriginal />, <Footer />]}
                />
                <Route
                    path='/trending-movie-detail/:id'
                    element={[<Header />, <DetailMovieTrending />, <Footer />]}
                />
                <Route path='/signin' element={<Signin />} />
                <Route path='/register' element={<Register />} />
                <Route
                    path='*'
                    element={[<Header />, <NotFound />, <Footer />]}
                />
            </Routes>
        </div>
    );
}

export default App;
