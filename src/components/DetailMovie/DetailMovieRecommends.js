import React from 'react';
import DetailItem from './DetailItem';
import { ListRecommends } from './DetailData';

function DetailMovieRecommends() {
    return <DetailItem ListDataMovies={ListRecommends} />;
}

export default DetailMovieRecommends;
