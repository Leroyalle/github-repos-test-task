import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const RepoCard: React.FC<Props> = ({ className }) => {
  return <div className={cn('', className)}></div>;
};
