import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';
import Cart from '../Cart';
import {LINKS} from "../../utils/constants";

const Link = ({name, link}) => {
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

export default function Navigation({includeCart = true}) {
    return (
        <nav>
            <ul className={styles.linkList}>
                <Link link={LINKS.events} name={'Wydarzenia'}/>
                <Link link={LINKS.shop} name={'Sklep'}/>
                <Link link={LINKS.about} name={'O Fundacji / Współpraca'}/>
                <Link link={LINKS.contact} name={'Kontakt'}/>
                {includeCart && (
                    <li>
                        <NavLink to='/cart'>
                            <Cart/>
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}
