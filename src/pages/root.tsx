import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Root: React.FC<Props> = ({ className }) => {
  return <div className={cn('', className)}></div>;
};
