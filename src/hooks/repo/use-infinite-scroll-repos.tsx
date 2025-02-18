import { Cursor } from '@/components/shared';
import { getReposByUserInfiniteQueryOptions } from '@/services/repo';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScrollRepos = (username: string) => {
  const { ref, inView } = useInView();

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    getReposByUserInfiniteQueryOptions(username),
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const cursor = <Cursor isFetching={isFetchingNextPage} ref={ref} />;

  return { data, isLoading, isError, cursor };
};
