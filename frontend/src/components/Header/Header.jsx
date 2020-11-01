import React from 'react';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='content'>
        <div className={styles.logo}>
          <NavLink to='/'>
            <span className={styles.logoImg}></span>
          </NavLink>
        </div>
        <div className={styles.divider}></div>
        <Navigation />
      </div>
    </header>
  );
}
