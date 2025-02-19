import { Cursor } from '@/components/shared';
import { toastMessageHandler } from '@/lib/shared';
import { useGetReposByUserQuery } from '@/services/repo';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScrollRepos = (username: string) => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const PER_PAGE = 20;

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [username]);

  const {
    data: repos,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetReposByUserQuery(
    { username, page, perPage: PER_PAGE },
    {
      skip: !username || !hasMore,
    },
  );

  useEffect(() => {
    if (repos) {
      const hasNextPage = repos.length % PER_PAGE === 0 && repos.length > 0;
      setHasMore(hasNextPage);
    }
  }, [repos, page]);

  useEffect(() => {
    if (inView && hasMore && !isFetching && !isLoading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore]);

  useEffect(() => {
    if (isError && error) {
      queueMicrotask(() => toastMessageHandler(error));
      setHasMore(false);
    }
  }, [isError]);

  const cursor = <Cursor isFetching={isFetching} ref={ref} />;

  return { data: repos, isLoading, isFetching, isError, cursor, hasMore };
};
