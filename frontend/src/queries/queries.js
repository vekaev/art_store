import { gql } from '@apollo/client';

export const allPaintingsQuery = gql`
  query allPaintingsQuery {
    paintings {
      id
      Name
      price
      author {
        Name
      }
      img {
        url
      }
    }
  }
`;

export const onePaintingQuery = gql`
  query onePaintingQuery($id: ID!) {
    painting(id: $id) {
      id
      Name
      price
      Depiction
      author {
        Name
      }
      img {
        url
      }
    }
  }
`;

