import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import {About, Cart, Contact, EventsPage, Main, PicturePage, Shop,} from './containers/pages';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoreProvider from './providers/StoreProvider';
import {LINKS} from "./utils/constants";

export default function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <StoreProvider>
            <Header/>
            <Switch>
                <>
                    <main className='content'>
                        <Route exact path='/' component={Main}/>
                        <Route path={`${LINKS.shop}/:pictureId`} component={PicturePage}/>
                        <Route exact path={LINKS.shop} component={Shop}/>
                        <Route path={LINKS.cart} component={Cart}/>
                        <Route exact path={LINKS.events} component={EventsPage}/>
                    </main>
                    <Route exact path={LINKS.about} component={About}/>
                    <Route exact path={LINKS.contact} component={Contact}/>
                </>
            </Switch>
            <Footer/>
        </StoreProvider>
    );
}
