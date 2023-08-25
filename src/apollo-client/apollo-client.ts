import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://webserver-l2tp.onrender.com/graphql',
    cache: new InMemoryCache(),
});
export default client;
