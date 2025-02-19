import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';
import { Toaster } from '../shared';

interface Props {
  children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <>
      <Toaster position="top-center" />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
