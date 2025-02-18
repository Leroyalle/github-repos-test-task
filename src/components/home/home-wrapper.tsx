import React from 'react';
import { cn } from '@/lib/utils';
import { SearchField } from './search';
import { useDebounceSearch, useInfiniteScrollRepos } from '@/hooks';
import { Container } from '../shared';

interface Props {
  className?: string;
}

export const HomeWrapper: React.FC<Props> = ({ className }) => {
  const { searchValue, debouncedSearchValue, handleSearch } = useDebounceSearch();
  const { data } = useInfiniteScrollRepos(debouncedSearchValue);

  console.log('REPOS', data);
  return (
    <Container className="px-6">
      <section className={cn('', className)}>
        <h2 className="sr-only">Поиск репозиториев</h2>
        <SearchField value={searchValue} onChange={handleSearch} />
      </section>
    </Container>
  );
};
