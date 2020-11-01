import React from 'react';
import { useQuery } from '@apollo/client';
import { paintingsQuery } from './queries';

const PaintingsList = (props) => {
  const { loading, error, data } = useQuery(paintingsQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return <h1>PaintingsList</h1>;
};

export default PaintingsList;
