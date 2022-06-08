/* eslint-disable no-useless-concat */
import React from 'react';
import ListItemCategory from './ListItemCategory';

function NewDisney({ newDisneys }) {
    return (
        <ListItemCategory
            ListDataItems={newDisneys}
            titleCategory='New to Disney+'
            slugCategory='new-disney'
        />
    );
}

export default NewDisney;
