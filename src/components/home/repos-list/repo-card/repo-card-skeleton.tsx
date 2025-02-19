import React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/shared';

interface Props {
  className?: string;
}

export const RepoCardSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Skeleton className="h-20 w-full" />
    </div>
  );
};
