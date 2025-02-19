import React from 'react';
import { cn } from '@/lib/utils';
import { SearchField } from './search';
import { useDebounceSearch, useInfiniteScrollRepos } from '@/hooks';
import { Container } from '../shared';
import { ReposList } from './repos-list';

interface Props {
  className?: string;
}

export const HomeWrapper: React.FC<Props> = ({ className }) => {
  const { searchValue, debouncedSearchValue, handleSearch } = useDebounceSearch();
  const {
    data: repos,
    isPending,
    isFetching,
    cursor,
  } = useInfiniteScrollRepos(debouncedSearchValue);

  return (
    <Container className="p-6">
      <section className={cn('', className)}>
        <h2 className="sr-only">Поиск репозиториев</h2>
        <SearchField value={searchValue} onChange={handleSearch} className="mb-3" />
        <ReposList repos={repos} isLoading={isPending && isFetching} />
        {debouncedSearchValue && cursor}
      </section>
    </Container>
  );
};
