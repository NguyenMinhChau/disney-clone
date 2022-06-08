/* eslint-disable no-useless-concat */
import React from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import styles from './DetailMovie.module.css';
import DetailItemCardImage from './DetailItemCardImage';
import DetailItemActions from './DetailItemActions';
import DetailItemTimer from './DetailItemTimer';
import DetailItemDescription from './DetailItemDescription';

function DetailItem({ ListDataMovies }) {
    const { id } = useParams();
    const listData = ListDataMovies();
    if (listData) {
        const data = listData.find((item) => item.id === id);
        return (
            <>
                <div
                    className={`${clsx(styles.detailMovie)}`}
                    style={{
                        backgroundImage: 'url(' + `${data.backgroundImg}` + ')',
                        backgroundPosition: 'center center',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className={`${clsx(styles.detailMovie_container)}`}>
                        <DetailItemCardImage data={data} />
                        <DetailItemActions />
                        <DetailItemTimer data={data} />
                        <DetailItemDescription data={data} />
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div
                className={`${clsx(styles.detail_movie_loader_container)} mt-3`}
            >
                <span className='loader'></span>
            </div>
        );
    }
}

export default DetailItem;
