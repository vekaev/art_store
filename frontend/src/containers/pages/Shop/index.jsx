import React from 'react';
import { useStore } from '../../../providers/StoreProvider';
import { PaintingsList } from '../../PaintingsList/PaintingsList';

export default function Shop() {
  const { paintings, AddToCart } = useStore();

  return <PaintingsList data={paintings} AddToCart={AddToCart} />;
}
