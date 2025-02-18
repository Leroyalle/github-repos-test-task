import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1440px]', className)}>{children}</div>;
};
