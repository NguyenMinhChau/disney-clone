/* eslint-disable no-useless-concat */
import React from 'react';
import ListItemCategory from './ListItemCategory';

function Recommends({ recommends }) {
    return (
        <ListItemCategory
            ListDataItems={recommends}
            titleCategory='Recommended For You'
            slugCategory='recommend'
        />
    );
}

export default Recommends;
