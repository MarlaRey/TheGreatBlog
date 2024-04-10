import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/clutfx5sr12q507wbxnl7wr1n/master',
  cache: new InMemoryCache(),
  onError: (error) => {
    console.error('Apollo Client Error:', error);
  }
});

export default client;
