import React from 'react';
import { HomeWrapper } from '@/components';
import { useDebounceSearch } from '@/hooks';

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  const { searchValue, debouncedSearchValue, handleSearch } = useDebounceSearch();
  return (
    <main className={className}>
      <HomeWrapper
        key={debouncedSearchValue}
        debouncedSearchValue={debouncedSearchValue}
        searchValue={searchValue}
        handleSearch={handleSearch}
      />
    </main>
  );
};
