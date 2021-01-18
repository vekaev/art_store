import React, { useState } from 'react';
import {
  Button,
  Input,
  Select,
  UnderImgLinks,
} from '../../../components/Components';
import { LINKS } from '../../../utils/constants';
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

  return (
    <section className={styles.contact}>
      <form className={styles.formWrapper}>
        <div className={styles.imgPart}>
          <img src={'/img/img_lobster.jpg'} alt='lobster' />
          <Button className={styles.formPart_btn} type={'submit'}>
            WYŚLIJ
          </Button>
        </div>
        <div className={styles.formPart}>
          <UnderImgLinks className={styles.formPart_title} to={LINKS.contact}>
            ZOSTAW SWOJE DANE Do kontaktu
          </UnderImgLinks>

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
    </section>
  );
});

export default Contact;
