import React from 'react';

/*
    format:
      localhost:3000/hello/Mac?food=pineapple-pen
*/
export const Hello = ( { params, location } ) => (
  <h3>Howdy, { params.name }! You like { location.query.food }.</h3>
);