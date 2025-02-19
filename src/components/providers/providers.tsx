import React, { ReactNode } from 'react';
import { Toaster } from '../shared';
import { Provider } from 'react-redux';
import { store } from '@/store';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" />
      <Provider store={store}>{children}</Provider>
    </>
  );
};
