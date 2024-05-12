// **Unlike loading page this one needs to be a client component!
'use client';

import Error from 'next/error';

const error = (error: { error: any }) => {
  console.log('ERROR', error);
  return <div>{error.error.message}</div>;
};

export default error;
