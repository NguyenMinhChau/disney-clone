import React from 'react';
import clsx from 'clsx';
import styles from './Home.module.css';
import ImageSlider from './Slider';
import ImageViewers from './ImageViewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import {
    LoadData,
    ListRecommends,
    ListNewDisney,
    ListOriginals,
    ListTrendings,
} from '../DetailMovie/DetailData';

function Home() {
    const listRecommends = ListRecommends();
    const listNewDisneys = ListNewDisney();
    const listOriginals = ListOriginals();
    const listTrendings = ListTrendings();
    LoadData();
    return (
        <div className={`${clsx(styles.home)}`}>
            <ImageSlider />
            <div className={`${clsx(styles.clear)}`}></div>
            <div className='container-fluid'>
                <ImageViewers />
                <Recommends recommends={listRecommends} />
                <NewDisney newDisneys={listNewDisneys} />
                <Originals originals={listOriginals} />
                <Trending trendings={listTrendings} />
            </div>
        </div>
    );
}

export default Home;
