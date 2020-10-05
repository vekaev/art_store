import React from 'react';
import styles from './Navigation.module.scss';

export default function Cart({ count = 15 }) {
  return (
    <div className={styles.cart}>
      <span className={styles.iconCart}></span>
      {count >= 1 && <p className={styles.counter}>{count}</p>}
    </div>
  );
}
