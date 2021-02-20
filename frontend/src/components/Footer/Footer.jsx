import React from 'react';
import styles from './Footer.module.scss';
import {NavLink} from 'react-router-dom';
import {COMPANY_INFO, LINKS} from '../../utils/constants';

const Link = ({name, link}) => {
    return (
        <li>
            <NavLink activeClassName={`${styles.activeLink}`} to={`/${link}`}>
                {name}
            </NavLink>
        </li>
    );
};

export function Footer() {
    return (
        <footer className='content'>
            <ul className={styles['info-list']}>
                <li className={styles['info-list__item']}>
                    <div className={styles['imp-part']}></div>
                    <div className={styles['text-part']}>
                        <ul className={styles['link-list']}>
                            <Link link={LINKS.events} name={'Wydarzenia'}/>
                            <Link link={LINKS.shop} name={'Sklep'}/>
                            <Link link={LINKS.about} name={'O Fundacji / Współpraca'}/>
                            <Link link={LINKS.contact} name={'Kontakt'}/>
                        </ul>
                    </div>
                </li>
                <li className={styles['info-list__item']}>
                    <div className={styles['imp-part']}></div>
                    <div className={styles['text-part']}>
                        <ul className={styles['link-list']}>
                            <Link link={'webregulations'} name={'Regulamin strony'}/>
                            <Link
                                link={'shopregulations'}
                                name={'Regulamin Vive Art'}
                            />
                            <Link link={'privacypolicy'} name={'Polityka prywatności'}/>
                        </ul>
                    </div>
                </li>
                <li className={styles['info-list__item']}>
                    <div className={styles['imp-part']}></div>
                    <div className={styles['text-part']}>
                        <ul className={styles['contact-list']}>
                            <p>Od poniedziałku do piątku:</p>
                            <p>od 10:00 do 17:00</p>
                            <a href={`tel:${COMPANY_INFO.TEL}`}>{COMPANY_INFO.TEL}</a>
                            <a href={`mailto:${COMPANY_INFO.EMAIL}`}>
                                {COMPANY_INFO.EMAIL}
                            </a>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className={styles['privacy']}>
                <NavLink to='/' className={styles['img-part']}></NavLink>
                <p>
                    © Wszystkie prawa autorskie naleza do Vive Art z.o.o. | &nbsp;
                    {new Date().getFullYear() || 2020}
                </p>
            </div>
        </footer>
    );
}
