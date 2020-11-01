import React from 'react';
import styles from './Navigation/Navigation.module.scss';

export default function Cart({ count }) {
  return (
    <div className={styles.cart}>
      <span className={styles.iconCart}></span>
      {count >= 1 && <p className={styles.counter}>{count}</p>}
    </div>
  );
}
