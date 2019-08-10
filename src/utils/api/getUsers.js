import gql from 'graphql-tag';

const GET_USER = gql`
  query users {
    users {
      name
      age
    }
  }
`;

const allUsers = async (apolloClient, provider) => {
  const { data } = await apolloClient.query({
    query: GET_USER,
  });
  return data;
};

export { allUsers };
