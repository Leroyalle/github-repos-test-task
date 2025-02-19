import React from 'react';
import { SearchField } from './search';
import { useInfiniteScrollRepos } from '@/hooks';
import { Container } from '../shared';
import { ReposList } from './repos-list';

interface Props {
  debouncedSearchValue: string;
  searchValue: string;
  handleSearch: (value: string) => void;
  className?: string;
}

export const HomeWrapper: React.FC<Props> = ({
  debouncedSearchValue,
  searchValue,
  handleSearch,
  className,
}) => {
  const { data: repos, isLoading, cursor, hasMore } = useInfiniteScrollRepos(debouncedSearchValue);

  return (
    <Container className="p-6">
      <section className={className}>
        <h2 className="sr-only">Поиск репозиториев</h2>
        <SearchField value={searchValue} onChange={handleSearch} className="mb-3" />
        <ReposList repos={repos} isLoading={isLoading} />
        {hasMore && repos && repos.length > 0 && debouncedSearchValue && cursor}
      </section>
    </Container>
  );
};
