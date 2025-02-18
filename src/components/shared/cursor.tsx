import React from 'react';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

interface Props {
  ref: (node?: Element | null) => void;
  isFetching: boolean;
  className?: string;
}

export const Cursor: React.FC<Props> = ({ isFetching, ref, className }) => {
  return (
    <>
      {isFetching && <Loader className="animate-spin" />}
      <div className={cn('', className)} ref={ref} />
    </>
  );
};
