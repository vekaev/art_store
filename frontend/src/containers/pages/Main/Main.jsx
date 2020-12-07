import React from 'react';
import {
  Image,
  Button,
  Input,
  UnderImgLinks,
} from '../../../components/Components';
import styles from './Main.module.scss';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import { LINKS } from '../../../utils/constants';
import { useState } from 'react';

export default function Main({ events = [], paintings = [] }) {
  return (
    <>
      <Intro events={events} />
      <MainShop paintings={paintings} />
      <About />
      <Contact />
    </>
  );
}

const Intro = React.memo(({ events = [] }) => {
  const lastEvent = events[0];
  return (
    <section className={styles.introDesktop}>
      <span className={styles.imgPart}>
        <UnderImgLinks className={styles.imgPart_link} to={LINKS.events}>
          Wydarzenia
        </UnderImgLinks>
        <div className={styles.imgPart_wrapper}>
          <Image src={lastEvent?.img.url} />
        </div>
        <p className={styles.imgPart_info}>
          Sprawdź naszą liste wydarzeń artystycznych, warsztatów i wystąpień
        </p>
      </span>
      <div className={styles.textPart}>
        <p className={styles.textPart_date}>
          {moment(lastEvent?.date).format('DD.MM')}
        </p>
        <p className={styles.info}>
          Zobacz wszystkie wydazenia artystyczne które sie odbywaja dzisiaj
        </p>
      </div>
    </section>
  );
});

const MainShop = React.memo(({ paintings }) => {
  return (
    <section className={styles.shop}>
      <h2 className={styles.shop_title}>Sklep</h2>
      <p className={styles.shop_description}>
        W naszym sklepie znajdziecie prace różnych artystów. Zarówno tych
        doświadczonych, jak i tych początkujących. Wybierajcie, podziwiajcie
        i kupujcie! Zyski ze sprzedaży przeznaczone są na bieżące funkcjonowanie
        Fundacji a więc kupując u nas wspierasz młodych artystów! Istnieje
        możliwość zamawiania prac u każdego artysty. Idealny i oryginalny pomysł
        na prezent!
      </p>
      <ul className={styles.cardList}>
        {paintings.slice(0, 12).map((item, idx) => {
          return (
            <li className={styles.cardList_item} key={idx}>
              <NavLink
                className={styles['cardList_item-content']}
                to={`/shop/${item.id}`}
              >
                <Image src={item?.img[0]?.url} />
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Button size='large' className={styles.shop_link} href={LINKS.shop}>
        Idź do sklepu
      </Button>
    </section>
  );
});

const About = React.memo(() => {
  return (
    <section className={styles.about}>
      <div className={styles.textPart}>
        <p>
          Permanentną cechą naszych czasów jest ZMIANA. <br />
          Zmienność to nieustanny ruch. <br /> <br />
          Dynamika, która wyzwala dodatkowe pokłady energii. Synergii.
          <br /> <br />
          I tak powstała Fundacja Vive Art — Fundacja z myślą o ludziach i ich
          energii. O artystach. Tych nieodkrytych i tych znanych. Wymianie myśli
          i emocji. Odkrywaniu i współodczuwaniu chwil, słów, barw i dźwięków.
          <br /> <br />
          Historyczna ulica Wrocławia — JATKI. Otwieramy naszą przestrzeń dla
          projektów sztuki i kultury. Łączymy pokolenia, stwarzamy warunki
          do ekspozycji, nie definiujemy. Poszukujemy…
        </p>
      </div>
      <div className={styles.imgPart}>
        <UnderImgLinks className={styles.about_link} to={LINKS.about}>
          czym siĘ zajmujemy?
        </UnderImgLinks>
        <img src={'/img/img_lobster.jpg'} />
      </div>
    </section>
  );
});

const Contact = React.memo(() => {
  const [form, setFrom] = useState({
    name: '',
    tel: '',
    email: '',
  });

  const handleFormChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.imgPart}>
        <img src={'/img/img_coop.jpg'} />
      </div>
      <form className={styles.formPart}>
        <UnderImgLinks className={styles.formPart_title} to={LINKS.contact}>
          współpraca
        </UnderImgLinks>
        <Input
          className={styles.formPart_input}
          placeholder='Imę i Nazwisko'
          name='name'
          onChange={handleFormChange}
          value={form.name}
          required
        />
        <Input
          className={styles.formPart_input}
          placeholder='Numer kontaktowy'
          name='tel'
          onChange={handleFormChange}
          value={form.tel}
          required
        />
        <Input
          className={styles.formPart_input}
          placeholder='E-mail'
          name='email'
          type='email'
          onChange={handleFormChange}
          value={form.email}
          required
        />
        <Button className={styles.formPart_btn} type={'submit'}>
          WYŚLIJ
        </Button>
      </form>
    </section>
  );
});
