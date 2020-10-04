import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Link = ({ name, link }) => {
  return (
    <li>
      <NavLink activeClassName={styles.activeLink} to={`/${link}`}>
        {name}
      </NavLink>
    </li>
  );
};

export default function Navigation() {
  return (
    <nav>
      <ul>
        <Link link={'about'} name={'O Fundacji'} />
        <Link link={'events'} name={'Wydarzenia'} />
        <Link link={'shop'} name={'Sklep'} />
        <Link link={'cooperation'} name={'Współpraca'} />
        <Link link={'contact'} name={'Kontakt'} />
      </ul>
    </nav>
  );
}
