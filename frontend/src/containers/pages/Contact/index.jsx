import React, { useState } from 'react';
import { Button, Input, UnderImgLinks } from '../../../components/Components';
import { LINKS } from '../../../utils/constants';
import styles from './Contact.module.scss';

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
        <img src={'/img/img_lobster.jpg'} alt='lobster' />
      </div>
      <form className={styles.formPart}>
        <UnderImgLinks className={styles.formPart_title} to={LINKS.contact}>
          ZOSTAW SWOJE DANE Do kontaktu
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

export default Contact;
