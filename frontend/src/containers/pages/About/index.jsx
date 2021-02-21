import React from 'react';
import {Button, UnderImgLinks} from '../../../components/Components';
import {LINKS} from '../../../utils/constants';
import styles from './About.module.scss';

export const About = React.memo(() => {
    return (
        <>
            {/* <Intro/>*/}
            <Cooperation/>
            <Sponsor/> 
            <Events/>
        </>
    );
})

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={` ${styles.content} content`}>
                <div className={styles.textPart}>
                    <div className={styles.column}>
                        <h2>Poznaj vive art</h2>
                        <p>
                            Dwóch doświadczonych mężczyzn stwierdziło, że oprócz rodziny,
                            dzieci, biznesu i szeroko rozumianej aktywności zawodowej w życiu
                            warto jest znaleźć czas, by zadziałać społecznie. I tak powstała
                            Fundacja Vive Art - Fundacja z myślą o młodych artystach.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>Nasz cel</h3>
                        <p>
                            Jedni pomagają chorym dzieciom, inni osobom starszym,
                            a my postanowiliśmy pójść w kierunku rozwoju młodzieży.
                            <br/>
                            <br/>
                            Wymyśliliśmy jak stworzyć warunki, jakich my nigdy nie mieliśmy —
                            może dlatego nie zostaliśmy artystami
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>Dla czego?</h3>
                        <p>
                            Kontakt z młodymi ludźmi, pełnymi własnych pasji i szalonych
                            pomysłów sprawia, że nasze społeczeństwo się bogaci i każdy z nas
                            odkrywa w sobie dotąd nieznane pokłady wrażliwości, wzajemnego
                            szacunku, tolerancji, koleżeńskich zachowań i wiele wiele innych,
                            których nie sposób tutaj w kilku zdaniach opisać...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Cooperation = () => {
    return (
        <section className={styles.cooperation}>
            <div className={` ${styles.content} content`}>
                <div className={styles.textPart}>
                    <div className={styles.column}>
                        <h3>Proste zasady</h3>
                        <p>
                            Jeżeli uważasz że jesteś zabawny, potrafisz śpiewać, masz własny
                            zespół lub chcesz go stworzyć, uważasz, że potrafisz malować,
                            rysować, piszesz wiersze, tworzysz muzykę… Lub po prostu czujesz,
                            że jesteś artystą i chcesz rozwijać swoje talenty, napisz do nas!
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>Jak?</h3>
                        <p>
                            Wiemy jak Wam pomóc byście zaistnieli na scenie, a w każdym razie
                            pomóc zweryfikować Wasz potencjał artystyczny.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>Zapraszamy...</h3>
                        <p>
                            do współpracy organizacje pozarządowe, woluntariuszy, animatorów
                            kultury, artystów, ludzi dobrej woli… wszystkich, którzy widzą
                            szansę na to, byśmy zrobili coś razem i będzie to korzystne
                            społecznie.
                        </p>
                    </div>
                </div>
                <div className={styles.imgPart}>
                    <UnderImgLinks className={styles.about_link} to={LINKS.about}>
                        WSPÓŁPRACA
                    </UnderImgLinks>
                    <img src={'/img/aboutPage/img_aboutPage-coop.jpg'} alt='painting'/>
                </div>
                <div className={styles.actionPart}>
                    <p>
                        Stworzyliśmy dla Was miejsce w centrum Wrocławia abyście swoją
                        kreatywnością zaskakiwali, urzekali a nawet szokowali nie tylko
                        polską, ale i zagraniczną publiczność.
                    </p>
                    <Button
                        className={styles.link_btn}
                        size='medium'
                        href={LINKS.contact}
                    >
                        napisz do nas
                    </Button>
                </div>
            </div>
        </section>
    );
};

const Sponsor = () => {
    return (
        <section className={styles.sponsor}>
            <div className={` ${styles.content} content`}>
                <div className={styles.imgPart}>
                    <UnderImgLinks className={styles.sponsor_link} to={LINKS.contact}>
                        Permanentnie szukamy sponsorów
                    </UnderImgLinks>
                    <img src={'/img/aboutPage/img_aboutPage-spons.jpg'} alt='painting'/>
                </div>
            </div>
        </section>
    );
};

const Events = () => {
    return (
        <section className={styles.events}>
            <div className={` ${styles.content} content`}>
                <div className={styles.textPart}>
                    <p>
                        Chcemy aby organizowane prze Fundację eventy były otwarte na nowe
                        formy ekspresji, rozrywki, interesujące zdarzenia artystyczne, dobrą
                        rozrywkę.
                    </p>
                    <p>
                        Zaproponowaliśmy kilka stałych punktów, które będą (mamy nadzieję)
                        na stałe wpisywać się w kalendarz wrocławskich wydarzeń
                        artystyczno-kulturalych.
                    </p>
                    <ul>
                        <li>
                            Czytamy wiersze: wiersze młodych poetów czytane przez nich samych
                            i czytanie wierszy mniej lub bardziej znanych poetów przez
                            lektorów
                        </li>
                        <li>
                            Wieczór francuski: recital piosenki francuskiej po francusku
                        </li>
                        <li>Wieczory jazzowo-bluesowe</li>
                        <li>Scena wolna: Sztuki teatralne</li>
                        <li>Wieczór z winylami</li>
                        <li>Stand up / kabaret</li>
                        <li>Muzyka klasyczna — koncerty</li>
                        <li>Wystawy prac artystycznych</li>
                        <li>Warsztaty tematyczne</li>
                    </ul>
                </div>
                <div className={styles.imgPart}>
                    <UnderImgLinks className={styles.events_link} to={LINKS.contact}>
                        a jakie są Wydarzenia?
                    </UnderImgLinks>
                    <img src={'/img/aboutPage/img_aboutPage-art.jpg'} alt='sculpture'/>
                </div>
            </div>
        </section>
    );
};
