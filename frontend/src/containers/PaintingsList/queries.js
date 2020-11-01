import { gql } from '@apollo/client';

export const paintingsQuery = gql`
  query paintingsQuery {
    paintings {
      Name
    }
  }
`;
