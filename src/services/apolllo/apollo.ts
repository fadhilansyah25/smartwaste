import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client';
import {HASURA_ADMIN_SECRET, HASURA_URI} from '@env';
import {getMainDefinition} from '@apollo/client/utilities';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {createClient} from 'graphql-ws';

const createApolloClient = () => {
  const token = HASURA_ADMIN_SECRET;

  const httpLink = new HttpLink({
    uri: HASURA_URI,
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': token,
    },
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'wss://champion-piranha-28.hasura.app/v1/graphql',
      connectionParams: {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': token,
        },
      },
    }),
  );

  const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return client;
};

export default createApolloClient;
