/* eslint-disable no-useless-concat */
import React from 'react';
import ListItemCategory from './ListItemCategory';

function Trending({ trendings }) {
    return (
        <ListItemCategory
            ListDataItems={trendings}
            titleCategory='Trending'
            slugCategory='trending'
        />
    );
}

export default Trending;
