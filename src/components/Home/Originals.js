/* eslint-disable no-useless-concat */
import React from 'react';
import ListItemCategory from './ListItemCategory';

function Originals({ originals }) {
    return (
        <ListItemCategory
            ListDataItems={originals}
            titleCategory='Originals'
            slugCategory='original'
        />
    );
}

export default Originals;
