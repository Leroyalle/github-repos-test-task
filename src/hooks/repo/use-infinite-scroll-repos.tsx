import { Cursor } from '@/components/shared';
import { getReposByUserInfiniteQueryOptions } from '@/services/repo';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

export const useInfiniteScrollRepos = (username: string) => {
  const { ref, inView } = useInView();

  const { data, isLoading, isPending, isFetching, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(getReposByUserInfiniteQueryOptions(username));

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  useEffect(() => {
    if (isError) {
      queueMicrotask(() =>
        toast.error('Произошла ошибка', {
          description: 'Не удалось найти репозитории пользователя с таким именем',
        }),
      );
    }
  }, [isError]);

  const cursor = <Cursor isFetching={isFetchingNextPage} ref={ref} />;

  return { data, isLoading, isPending, isFetching, isError, cursor };
};
