import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {HASURA_ADMIN_SECRET, HASURA_URI} from '@env';
import {setContext} from '@apollo/client/link/context';

const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: HASURA_URI,
  });

  const authLink = setContext((_, {headers}) => {
    const token = HASURA_ADMIN_SECRET;
    return {
      headers: {
        ...headers,
        'x-hasura-admin-secret': token,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};

export default createApolloClient;
