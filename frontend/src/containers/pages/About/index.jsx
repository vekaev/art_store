import React from 'react';
import {Button, UnderImgLinks} from '../../../components/Components';
import {LINKS} from '../../../utils/constants';
import styles from './About.module.scss';

export const About = React.memo(() => {
    return (
        <>
            <Intro/>
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
                        <h2>SZTUKA JEST MOTOREM KULTURY </h2>
                        <p>
                        Permanentną cechą naszych czasów jest ZMIANA. Zmienność to nieustanny ruch.Dynamika, która wyzwala dodatkowe pokłady energii. Synergii.I tak powstała Fundacja Vive Art — Fundacja z myślą o ludziach i ich energii. O artystach. Tych nieodkrytych i tych znanych. Wymianie myśli i emocji. Okrywaniu i współodczuwaniu chwil, słów, barw i dźwięków.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>Nasz cel</h3>
                        <p>
                        Wiemy jak Wam pomóc byście zaistnieli na scenie, a w każdym razie pomóc zweryfikować Wasz potencjał artystyczny.  Z myślą o Was Stworzyliśmy miejsce w centrum Wrocławia, abyście swoją kreatywnością zaskakiwali, urzekali, a nawet szokowali nie tylko polską, ale i zagraniczną publiczność
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h3>Dla czego?</h3>
                        <p>
                        Kontakt z ludźmi, pełnymi własnych pasji i oryginalnych pomysłów sprawia, że nasze społeczeństwo nabiera artystycznego bogactwa i każdy z nas odkrywa w sobie nieznane dotąd pokłady wrażliwości, wzajemnego szacunku, tolerancji oraz odkrywa wartości poznawcze.
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
                        <h3>Jeżeli</h3>
                        <div>
                            <ul>
                                <li>
                                    cechuje Cię kreatywność i oryginalność
                                </li>
                                <li>
                                    potrafisz śpiewać 
                                </li>
                                <li>masz własny zespół lub chcesz go stworzyć</li>
                                <li>malować lub rysować</li>
                                <li>piszesz wiersze</li>
                                <li>tworzysz muzykę</li>
                                <li>lubisz publiczność i występy</li>
                                <li>
                                    lub po prostu czujesz, że jesteś artystą i chcesz rozwijać swoje talenty — napisz do nas!
                                </li>
                            </ul>
                        </div>
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
                    Historyczna ulica Wrocławia  -  JATKI. Otwieramy naszą przestrzeń dla projektów sztuki i kultury. Łączymy pokolenia, stwarzamy warunki do ekspozycji, nie definiujemy. Poszukujemy…
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
        </section>//TODO: I don't understand why does it need onle one parent element o_o
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
