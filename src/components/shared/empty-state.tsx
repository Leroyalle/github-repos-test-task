import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  text?: string;
  imageUrl: string;
  className?: string;
}

export const EmptyState: React.FC<Props> = ({ text, imageUrl, className }) => {
  return (
    <div className={cn('flex flex-col justify-center items-center select-none', className)}>
      <p>{text}</p>
      <img src={imageUrl} />
    </div>
  );
};
