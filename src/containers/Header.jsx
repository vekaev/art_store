import React from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <NavLink to='/'>Home</NavLink>
      </div>
      <Navigation />
    </header>
  );
}
