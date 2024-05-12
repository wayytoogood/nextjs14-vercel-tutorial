import React from 'react';
import { Toaster } from 'react-hot-toast';

// Even though next.js doesn't have a special filed name providers, I think it's better to add here and use all the providers
// like react query, zustand etc.
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position='top-center' />
      {children}
    </>
  );
};
