import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {About, Cart, Contact, EventsPage, Main, PicturePage, Shop,} from './containers/pages';
import {Error, Header, Footer} from './components'
import {LINKS} from "./utils/constants";
import {createPath} from "./utils";

export default function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path={createPath(`${LINKS.shop}/:pictureId`)} component={PicturePage}/>
                <Route exact path={createPath(LINKS.shop)} component={Shop}/>
                <Route path={createPath(LINKS.cart)} component={Cart}/>
                <Route exact path={createPath(LINKS.events)} component={EventsPage}/>
                <Route exact path={createPath(LINKS.about)} component={About}/>
                <Route exact path={createPath(LINKS.contact)} component={Contact}/>
                <Route path='*' component={Error}/>
            </Switch>
            <Footer/>
        </>
    );
}
