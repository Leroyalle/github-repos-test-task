import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/shared';

interface Props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SearchField: React.FC<Props> = ({ value, onChange, className }) => {
  return (
    <Input
      className={cn('', className)}
      placeholder="Имя пользователя GitHub"
      value={value}
      max={20}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
