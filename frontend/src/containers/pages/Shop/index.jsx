import React , {useState, useEffect} from 'react';
import {PaintingsList} from '../../PaintingsList/PaintingsList';

export default function Shop({paintings, paintingsError, AddToCart}) {
 

  return (
    <PaintingsList data={paintings} error={paintingsError} AddToCart={AddToCart}/>
  );
}
