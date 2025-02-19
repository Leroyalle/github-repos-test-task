import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  updatedAt: string;
  className?: string;
}

export const RepoCardUpdated: React.FC<Props> = ({ updatedAt, className }) => {
  return <span className={cn('text-muted-foreground', className)}>{updatedAt}</span>;
};
