import React from 'react';
import {useStore} from '../../../providers/StoreProvider';
import {PaintingsList} from '../../PaintingsList/PaintingsList';

export default function Shop() {
    const {paintings, addToCart} = useStore();

    return <PaintingsList data={paintings} addToCart={addToCart}/>;
}
