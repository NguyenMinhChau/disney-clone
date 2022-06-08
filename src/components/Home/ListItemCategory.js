/* eslint-disable no-useless-concat */
import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function ListItemCategory({ ListDataItems, titleCategory, slugCategory }) {
    return (
        <div className={`${clsx(styles.recommends)}`}>
            <div className={`${clsx(styles.recommends_text)}`}>
                <h5 className='text_bold'>{titleCategory}</h5>
            </div>
            <div className={`${clsx(styles.recommends_items)}`}>
                {ListDataItems ? (
                    ListDataItems.map((item, index) => (
                        <Link
                            to={`/${slugCategory}-movie-detail/${item.id}`}
                            key={index}
                            className={`${clsx(styles.recommends_item)}`}
                            title={item.title}
                        >
                            <div
                                className={`${clsx(styles.recommends_item_1)}`}
                                style={{
                                    backgroundImage:
                                        'url(' + `${item.backgroundImg}` + ')',
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                        </Link>
                    ))
                ) : (
                    <div className='mt-2'>
                        <span className='loader'></span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListItemCategory;
