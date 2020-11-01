import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Cart from '../Cart';

const Link = ({ name, link }) => {
  return (
    <li className={styles.link}>
      <NavLink
        activeClassName={`${styles.activeLink} ${styles[`${link}`]}`}
        to={`/${link}`}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default function Navigation({cart}) {
  return (
    <nav>
      <ul className={styles.linkList}>
      <Link link={'events'} name={'Wydarzenia'} />
        <Link link={'shop'} name={'Sklep'} />
        <Link link={'about'} name={'O Fundacji / Współpraca'} />
        <Link link={'contact'} name={'Kontakt'} />
        <li>
          <NavLink to='/cart'>
            <Cart cart={cart}/>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
