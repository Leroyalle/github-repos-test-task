import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface Props {
  stars: number;
  className?: string;
}

export const RepoCardStars: React.FC<Props> = ({ stars, className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Star size={16} />
      {stars}
    </div>
  );
};
