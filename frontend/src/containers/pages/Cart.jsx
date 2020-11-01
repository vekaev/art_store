import React from 'react';
import { PaintingsList } from '../PaintingsList/PaintingsList';

export default function Cart({cart, removeFromCart}) {
  if (!cart.length) return 'empty'
  return <PaintingsList AddToCart={removeFromCart} data={cart}/>;
}
