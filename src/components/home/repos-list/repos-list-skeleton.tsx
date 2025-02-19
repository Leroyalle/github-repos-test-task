import React from 'react';
import { cn } from '@/lib/utils';
import { RepoCardSkeleton } from './repo-card';

interface Props {
  className?: string;
}

export const ReposListSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-y-3', className)}>
      {Array.from({ length: 3 }).map((_, index) => (
        <RepoCardSkeleton key={index} />
      ))}
    </div>
  );
};
