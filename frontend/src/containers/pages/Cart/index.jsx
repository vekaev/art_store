import React, {useEffect, useState} from 'react';
import {Link, NavLink, Route, Switch, useHistory, useRouteMatch,} from 'react-router-dom';
import styles from './Cart.module.scss';
import {Button, Image, Input, Select} from '../../../components/Components';
import {useStore} from '../../../providers/StoreProvider';

const CartRouteLinks = ({step = 1}) => {
    const {location} = useHistory();
    return (
        <div className={styles.CartRouteLinks}>
            <NavLink
                className={`${'/cart' === location.pathname && styles.currentLink}`}
                activeClassName={`${styles.ActiveLink}`} to={'/cart'}>
                Koszyk
            </NavLink>
            <NavLink
                activeClassName={styles.ActiveLink}
                className={`${'/cart/cashRegister' === location.pathname && styles.currentLink}`}
                to={'/cart/cashRegister' === location.pathname ? '/cart' : '/cart/cashRegister' }>
                Kasa
            </NavLink>
            <NavLink
                className={`${step >= 3 ? '' : styles.DisabledLink}
                ${'/cart/cashRegister/summary' === location.pathname && styles.currentLink}`}
                activeClassName={`${styles.ActiveLink}`}
                to={'/cart/cashRegister/summary' === location.pathname ? '/cart/cashRegister' : '/cart/cashRegister/summary'}
            >
                Podsumowanie
            </NavLink>
            <NavLink
                className={styles.DisabledLink}
                activeClassName={`${styles.ActiveLink}`}
                to={'/cart/cashRegister/summary/finish'}
            >
                Koniec
            </NavLink>
        </div>
    );
};

const CartItem = ({card, removeFromCart}) => {
    return (
        <li className={styles.cartCard}>
            <div className={styles.img}>
                <Image src={card.img && card?.img[0]?.url}/>
            </div>
            <div className={styles.infoList}>
                <p className={styles.Name}>{card?.name}</p>
                {card?.author && <p className={styles.author}>{card?.author?.name}</p>}
                {card?.price && <p className={styles.price}>{card?.price} zł</p>}
            </div>
            <span
                onClick={() => removeFromCart(card.id)}
                className={styles.crossBtn}
            ></span>
        </li>
    );
};

const CartList = ({data, removeFromCart}) => {
    return (
        <div className={styles.cartPage}>
            <ul className={styles.CartList}>
                {data?.map((item, index) => {
                    return (
                        <CartItem removeFromCart={removeFromCart} key={index} card={item}/>
                    );
                })}
            </ul>
            <CartResult cart={data}/>
        </div>
    );
};

const CartResult = ({cart = [], delivery = 0, className}) => {
    let match = useRouteMatch();

    const sumResult = cart?.reduce(function (sum, item) {
        return sum + item?.price;
    }, 0);

    return (
        <div >
            <ul className={`${styles.cartResult} ${className}`}>
                <li>
                    <p className={styles.title}>Suma</p>
                    <p className={styles.info}>{sumResult} zł</p>
                </li>
                <li>
                    <p className={styles.title}>Dostawa</p>
                    <p className={styles.info}>{delivery} zł</p>
                </li>
                <li>
                    <b className={styles.title}>Łącznie do zapłaty</b>
                    <b className={styles.info}>{sumResult + delivery} zł</b>
                </li>
            </ul>
            <Button
                href={`${match.url}/cashRegister`}
                className={styles.goToSecondStep}
            >
                przejdź dalej
            </Button>
        </div>
    );
};

const CartForm = ({submittedForm = {}, setSubmittedForm}) => {
    const history = useHistory();
    const [form, setForm] = useState({
        role: '',
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        city: '',
        outdoors: '',
        apartmentNum: '',
        postcode: '',
        comment: '',
        delivery: '',
    });

    useEffect(() => {
        if (Object.keys(submittedForm).length) setForm(submittedForm);
    }, [submittedForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userInfo', JSON.stringify(form));
        setSubmittedForm(form);
        history.push('/cart/cashRegister/summary');
    };

    const handleFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    return (
        <>
            <form className={styles.cartForm} onSubmit={handleSubmit}>
                <div className={styles.cartFormWrapper}>
                    <Select
                        handleSelect={handleFormChange}
                        className={styles.cartFormItem}
                        placeholder={'Wybierz opcję'}
                        name={'role'}
                        required
                        defaultValue={form?.role}
                        optionArray={[
                            {
                                name: 'Osoba fizyczna',
                                value: 'Osoba fizyczna',
                            },
                            {
                                name: 'Firma',
                                value: 'Firma',
                            },
                        ]}
                    />
                    <Input
                        className={styles.cartFormItem}
                        required
                        placeholder={'Imię *'}
                        value={form.firstName}
                        name='firstName'
                        type='text'
                        onChange={handleFormChange}
                    />
                    <Input
                        className={styles.cartFormItem}
                        required
                        placeholder={'Nazwisko *'}
                        name='lastName'
                        type='text'
                        onChange={handleFormChange}
                        value={form.lastName}
                    />
                    <Input
                        className={styles.cartFormItem}
                        required
                        placeholder={'E-mail *'}
                        name='email'
                        type='email'
                        onChange={handleFormChange}
                        value={form.email}
                    />
                    <Input
                        className={styles.cartFormItem}
                        required
                        placeholder={'Telefon kontaktowy *'}
                        name='tel'
                        type='text'
                        onChange={handleFormChange}
                        value={form.tel}
                    />
                    <Input
                        className={styles.cartFormItem}
                        required
                        placeholder={'Miejscowość *'}
                        name='city'
                        type='text'
                        onChange={handleFormChange}
                        value={form.city}
                    />
                    <Input
                        className={styles.cartFormItem}
                        required
                        placeholder={'Ulica / Numer domu *'}
                        name='outdoors'
                        type='text'
                        onChange={handleFormChange}
                        value={form.outdoors}
                    />
                    <Input
                        className={styles.cartFormItem}
                        placeholder={'Numer lokalu'}
                        name='apartmentNum'
                        type='text'
                        onChange={handleFormChange}
                        value={form.apartmentNum}
                    />
                    <Input
                        required
                        className={styles.cartFormItem}
                        placeholder={'Kod pocztowy *'}
                        name='postcode'
                        type='text'
                        onChange={handleFormChange}
                        value={form.postcode}
                    />
                    <Input
                        textarea
                        className={styles.cartFormItem}
                        placeholder={'Dodaj komentarz do zamówienia (50 słów)'}
                        name='comment'
                        type='text'
                        onChange={handleFormChange}
                        value={form.comment}
                    />
                </div>
                <div className={styles.radioBtnPart}>
                    <fieldset>
                        <legend>Opcje Dostawy</legend>
                        <span style={{marginTop: 40}} className={styles.radioWrapper}>
              <input
                  checked={form.delivery === 'Kurier / Kurier DPD'}
                  className={styles.custom}
                  type='radio'
                  onChange={handleFormChange}
                  value='Kurier / Kurier DPD'
                  name='delivery'
                  id='courier'
                  required
              />
              <label htmlFor='courier'>Kurier / Kurier DPD</label>
            </span>
                        <span className={styles.radioWrapper}>
              <input
                  checked={form.delivery === 'Poczta Polska'}
                  className={styles.custom}
                  type='radio'
                  onChange={handleFormChange}
                  value='Poczta Polska'
                  name='delivery'
                  id='post'
              />
              <label htmlFor='post'>Poczta Polska</label>
            </span>
                        <span className={styles.radioWrapper}>
              <input
                  checked={
                      form.delivery === 'Odbiór osobisty: Solskiego 1A, Wrocław'
                  }
                  className={styles.custom}
                  type='radio'
                  onChange={handleFormChange}
                  value='Odbiór osobisty: Solskiego 1A, Wrocław'
                  name='delivery'
                  id='office'
              />
              <label htmlFor='office'>
                Odbiór osobisty: Solskiego 1A, Wrocław
              </label>
            </span>
                    </fieldset>
                    <Button className={styles.submit} type='submit'>
                        przejdź dalej
                    </Button>
                </div>
            </form>
        </>
    );
};

const CartSummary = ({cart, submittedForm}) => {
    const sendRequest = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className={styles.Summary}>
                <div className={styles.CartSummary}>
                    <ul>
                        {cart.map((card, idx) => {
                            return (
                                <li key={idx} className={styles.cartCard}>
                                    <div className={styles.img}>
                                        <Image src={card.img[0].url}/>
                                    </div>
                                    <div className={styles.infoList}>
                                        <p className={styles.Name}>{card?.name}</p>
                                        {card?.author && (
                                            <p className={styles.author}>{card?.author?.name}</p>
                                        )}
                                        {card?.price && (
                                            <p className={styles.price}>{card?.price} zł</p>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <CartResult className={styles.CartSummaryResult} cart={cart}/>
                </div>
                <div className={styles.SummaryInfo}>
                    <h3>Dane do wysyłki:</h3>
                    <p className={styles.delivery}>{submittedForm?.delivery}</p>
                    <p>
                        {submittedForm?.firstName} {submittedForm?.lastName}
                    </p>
                    <p>{submittedForm?.email}</p>
                    <p>
                        {submittedForm?.outdoors} {submittedForm?.apartmentNum}
                    </p>
                    <p>
                        {submittedForm?.postcode} | {submittedForm?.city}
                    </p>

                    <p>Tel: {submittedForm?.tel}</p>
                </div>
            </div>
            <form className={styles.sendRequest} onSubmit={sendRequest}>
                <input
                    className={styles.customCheckbox}
                    type='checkbox'
                    id={'agreeForTerms'}
                    required
                />
                <label htmlFor='agreeForTerms'>
                    <p>
                        {' '}
                        Oświadczam, że znam i akceptuję postanowieni
                        <Link to={'/'}> Regulaminu Sklepu Internetowego ViveArt.com</Link>
                    </p>
                </label>
                <Button type='submit' className={styles.sendRequestBtn}>
                    zamawiam
                </Button>
            </form>
        </>
    );
};

export default function Cart() {
    const {cart, removeFromCart} = useStore();

    const [step, setStep] = useState(1);
    const [submittedForm, setSubmittedForm] = useState({});

    if (Object.keys(submittedForm).length > 0 && step < 3) {
        setStep(3);
    }

    useEffect(() => {
        if (localStorage.hasOwnProperty('userInfo')) {
            const userFromLocal = JSON.parse(localStorage.getItem('userInfo'));
            setSubmittedForm(userFromLocal);
        }
    }, []);

    if (cart.length === 0) {
        return (
            <>
                <h2 className={styles.NothingTitle}>Twój koszyk jest pusty</h2>
                <Button className={styles.NothingBtn} href='/shop'>Iść do sklepu</Button>
            </>
        );
    }

    return (
        <main className='content'>
            <CartRouteLinks step={step}/>
            <Switch>
                <Route
                    exact
                    path={`/cart`}
                    component={() => (
                        <CartList removeFromCart={removeFromCart} data={cart}/>
                    )}
                />
                {cart.length > 0 && (
                    <Route
                        exact
                        path={`/cart/cashRegister`}
                        component={() => (
                            <CartForm
                                submittedForm={submittedForm}
                                setSubmittedForm={setSubmittedForm}
                            />
                        )}
                    />
                )}
                {step >= 3 && (
                    <Route
                        exact
                        path={`/cart/cashRegister/summary`}
                        component={() => (
                            <CartSummary cart={cart} submittedForm={submittedForm}/>
                        )}
                    />
                )}
            </Switch>
        </main>
    );
}
