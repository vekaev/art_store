import {gql} from '@apollo/client';

export const allEventsQuery = gql`
  query allEventsQuery {
    events {
      id
      title 
      description
      place
      img {
        url
      }
      date
      canceled
      event_type {
        title
      }
    }
  }
`;

export const allPaintingsQuery = gql`
  query allPaintingsQuery {
    paintings {
      id
      name
      price
      author {
        name
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
      name
      price
      depiction
      author {
        name
        avatar {
            url
        }
        bio
        facebook
        email
        tel
      }
      img {
        url
      }
    }
  }
`;
