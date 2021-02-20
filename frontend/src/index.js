import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
import client from './utils/apolloClient';
import StoreProvider from './providers/StoreProvider';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(
        <Router>
            <ApolloProvider client={client}>
                <StoreProvider>
                    <App/>
                </StoreProvider>
            </ApolloProvider>
        </Router>,
        root,
    );
});
