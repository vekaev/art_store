import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const link = new HttpLink({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
