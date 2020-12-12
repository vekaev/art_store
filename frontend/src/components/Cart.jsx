import React from 'react';
import { useStore } from '../providers/StoreProvider';
import styles from './Navigation/Navigation.module.scss';

export default function Cart() {
  const { cart } = useStore();
  return (
    <div className={styles.cart}>
      <span className={styles.iconCart}></span>
      {cart?.length >= 1 && <p className={styles.counter}>{cart?.length}</p>}
    </div>
  );
}
