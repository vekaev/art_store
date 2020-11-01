import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { Select } from '../Components';

const Link = ({ name, link }) => {
  return (
    <li>
      <NavLink activeClassName={`${styles.activeLink}`} to={`/${link}`}>
        {name}
      </NavLink>
    </li>
  );
};

export default function Footer() {
  return (
    <footer className='content'>
      <ul className={styles['info-list']}>
        <li className={styles['info-list__item']}>
          <div className={styles['imp-part']}></div>
          <div className={styles['text-part']}>
            <ul className={styles['link-list']}>
              <Link link={'about'} name={'O Fundacji'} />
              <Link link={'events'} name={'Wydarzenia'} />
              <Link link={'shop'} name={'Sklep'} />
              <Link link={'cooperation'} name={'Współpraca'} />
              <Link link={'contact'} name={'Kontakt'} />
            </ul>
          </div>
        </li>
        <li className={styles['info-list__item']}>
          <div className={styles['imp-part']}></div>
          <div className={styles['text-part']}>
            <ul className={styles['link-list']}>
              <Link link={'webregulations'} name={'Regulamin strony'} />
              <Link
                link={'consumerregulations'}
                name={'Regulamin konsumenta'}
              />
              <Link
                link={'sponsorregulations'}
                name={'Regulamin dla sponsora'}
              />
              <Link link={'artistregulations'} name={'Regulamin dla artysta'} />
              <Link link={'privacypolicy'} name={'Polityka prywatnosci'} />
            </ul>
          </div>
        </li>
        <li className={styles['info-list__item']}>
          <div className={styles['imp-part']}></div>
          <div className={styles['text-part']}>
            <ul className={styles['contact-list']}>
              <p>Od poniedziałku do piątku:</p>
              <p>od 10:00 do 17:00</p>
              <a href='tel:+48 604 305 569'>+48 604 305 569</a>
              <a href='tel:+48 604 305 569'>+48 604 305 569</a>
              <a href='mailto:kontakt@gallerystore.pl'>
                kontakt@gallerystore.pl
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
