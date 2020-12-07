import React from 'react';
import {
  Button,
  LinkWrapper,
  UnderImgLinks,
} from '../../../components/Components';
import { LINKS } from '../../../utils/constants';
import styles from './About.module.scss';

export default function About() {
  return (
    <>
      <Intro />
      <Cooperation />
    </>
  );
}

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
              a my postanowiliśmy pójść w kierunku rozwoju młodzieży.
              <br />
              <br />
              Wymyśliliśmy jak stworzyć warunki, jakich my nigdy nie mieliśmy —
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
              zespół lub chcesz go stworzyć, uważasz, że potrafisz malować,
              rysować, piszesz wiersze, tworzysz muzykę… Lub po prostu czujesz,
              że jesteś artystą i chcesz rozwijać swoje talenty, napisz do nas!
            </p>
          </div>
          <div className={styles.column}>
            <h3>Jak?</h3>
            <p>
              Wiemy jak Wam pomóc byście zaistnieli na scenie, a w każdym razie
              pomóc zweryfikować Wasz potencjał artystyczny.
            </p>
          </div>
          <div className={styles.column}>
            <h3>Zapraszamy...</h3>
            <p>
              do współpracy organizacje pozarządowe, woluntariuszy, animatorów
              kultury, artystów, ludzi dobrej woli… wszystkich, którzy widzą
              szansę na to, byśmy zrobili coś razem i będzie to korzystne
              społecznie.
            </p>
          </div>
        </div>
        <div className={styles.imgPart}>
          <UnderImgLinks className={styles.about_link} to={LINKS.about}>
            WSPÓŁPRACA
          </UnderImgLinks>
          <img src={'/img/aboutPage/img_aboutPage-coop.jpg'} />
        </div>
        <div className={styles.actionPart}>
          <p>
            Stworzyliśmy dla Was miejsce w centrum Wrocławia abyście swoją
            kreatywnością zaskakiwali, urzekali a nawet szokowali nie tylko
            polską, ale i zagraniczną publiczność.
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
