import React from 'react';
import { HomeWrapper } from '@/components';

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <main className={className}>
      <HomeWrapper />
    </main>
  );
};
