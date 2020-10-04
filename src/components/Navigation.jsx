import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Cart from '../components/Cart';

const Link = ({ name, link }) => {
  return (
    <li class={styles.link}>
      <NavLink activeClassName={styles.activeLink} to={`/${link}`}>
        {name}
      </NavLink>
    </li>
  );
};

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.linkList}>
        <Link link={'about'} name={'O Fundacji'} />
        <Link link={'events'} name={'Wydarzenia'} />
        <Link link={'shop'} name={'Sklep'} />
        <Link link={'cooperation'} name={'Współpraca'} />
        <Link link={'contact'} name={'Kontakt'} />
        <li>
          <NavLink to='/cart'>
            <Cart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
