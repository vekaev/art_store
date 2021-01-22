import React, {useState} from 'react';
import Navigation from '../Navigation/Navigation';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss';
import Cart from '../Cart';
import {COMPANY_INFO} from '../../utils/constants';
import {LinkWrapper} from '../Components';

const Aside = ({active, CloseAside}) => {
    return (
        <aside
            onClick={CloseAside}
            className={`${styles.aside} ${active && styles.active}`}
        >
            <div className={styles.asideContent}>
                <Navigation includeCart={false}/>
                <LinkWrapper
                    className={styles.AsidePhoneNumber}
                    href={`tel:${COMPANY_INFO.TEL}`}
                >
                    {COMPANY_INFO.TEL}
                </LinkWrapper>
            </div>
        </aside>
    );
};

export default function Header() {
    const [asideVisibility, setAsideVisibility] = useState(false);

    const CloseAside = () => {
        setAsideVisibility(false);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <header className={styles.header}>
                <div style={{padding: 0}} className='content'>
                    <div className={styles.logoPart}>
                        <div onClick={CloseAside} className={styles.cartLogo}>
                            <NavLink to='/cart'>
                                <Cart/>
                            </NavLink>
                        </div>
                        <NavLink to='/'>
                            <span className={styles.logoImg}></span>
                        </NavLink>
                        <div
                            onClick={() => {
                                setAsideVisibility(!asideVisibility);
                            }}
                            className={`
              ${styles['hamburger']} 
              ${styles[asideVisibility && 'active']}`}
                        >
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.navPart}>
                        <Navigation/>
                    </div>
                </div>
            </header>
            <Aside active={asideVisibility} CloseAside={CloseAside}/>
        </>
    );
}
