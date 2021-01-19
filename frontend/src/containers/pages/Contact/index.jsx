import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  UnderImgLinks,
} from '../../../components/Components';
import { COMPANY_INFO, LINKS } from '../../../utils/constants';
import styles from './Contact.module.scss';

const Contact = React.memo(() => {
  const [form, setFrom] = useState({
    name: '',
    tel: '',
    email: '',
    purpose: '',
  });

  const handleFormChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className={styles.contact}>
        <div className={`  content`}>
          <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <div className={styles.imgPart}>
              <img src={'/img/img_lobster.jpg'} alt='lobster' />
              <Button className={styles.formPart_btn} type={'submit'}>
                WYŚLIJ
              </Button>
            </div>
            <div className={styles.formPart}>
              <UnderImgLinks
                className={styles.formPart_title}
                to={LINKS.contact}
              >
                ZOSTAW SWOJE DANE Do kontaktu
              </UnderImgLinks>
              <h1>kotakt</h1>

              <Select
                handleSelect={handleFormChange}
                className={styles.formPart_input}
                placeholder={'Typ współpracy'}
                name='purpose'
                defaultValue={form?.purpose}
                optionArray={[
                  {
                    name: 'Atrysta',
                    value: 'Atrysta',
                  },
                  {
                    name: 'Sponsor',
                    value: 'Sponsor',
                  },
                  {
                    name: 'Inne',
                    value: 'Inne',
                  },
                ]}
              />
              <Input
                className={styles.formPart_input}
                placeholder='Numer kontaktowy *'
                name='tel'
                onChange={handleFormChange}
                value={form.tel}
                required
              />
              <Input
                className={styles.formPart_input}
                placeholder='E-mail *'
                name='email'
                type='email'
                onChange={handleFormChange}
                value={form.email}
                required
              />
              <Input
                className={styles.formPart_input}
                placeholder='Imię i Nazwisko *'
                name='name'
                onChange={handleFormChange}
                value={form.name}
                required
              />
              <Input
                textarea
                className={styles.formPart_input}
                placeholder='Napisz swoje pytanie (100 słów)'
                name='description'
                onChange={handleFormChange}
                value={form.description}
              />
            </div>
          </form>
        </div>
      </section>
      <section className={styles.additional}>
        <div className={` ${styles.content} content`}>
          <div className={styles.textPart}>
            <h2 className={styles.title}>PEŁNE DANE KONTAKTOWE</h2>
            <p className={styles.descriptionText}>
              Z myślą o Was Stworzyliśmy miejsce w centrum Wrocławia, abyście
              swoją kreatywnością zaskakiwali, urzekali, a nawet szokowali nie
              tylko polską, ale i zagraniczną publiczność.
            </p>
            <img src={'/img/icon_arrow-down.svg'} alt='arrowDown' />
            <div className={styles.links}>
              <a
                className={styles.emailLink}
                href={`mailto:${COMPANY_INFO.EMAIL}`}
              >
                {COMPANY_INFO.EMAIL}
              </a>
              <a href={`tel:${COMPANY_INFO.TEL}`}>{COMPANY_INFO.TEL}</a>
              <p>ul. Św. Elżbiety 3/4 50-111 Wrocław</p>
            </div>
          </div>
          <div className={styles.imgPart}>
            <img src='/img/img_hand-down.jpg' alt='hand down' />
            <p className={styles.descriptionText}>
              Wiemy jak Wam pomóc byście zaistnieli na scenie, a w każdym razie
              pomóc zweryfikować Wasz potencjał artystyczny.
            </p>
            <p>
              FUNDACJA VIVE ART
              <br />
              KRS 0000840162,
              <br className={styles.contactBr} />
              NIP 8992879352,
              <br /> REGON 386011119
            </p>
          </div>
        </div>
      </section>
    </>
  );
});

export default Contact;
