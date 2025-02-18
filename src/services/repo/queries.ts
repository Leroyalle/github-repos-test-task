import { infiniteQueryOptions } from '@tanstack/react-query';
import { repoService } from './repo-api';

export const getReposByUserInfiniteQueryOptions = (username: string) => {
  const perPage = 20;
  return infiniteQueryOptions({
    queryKey: ['repos', username],
    queryFn: ({ pageParam = 1 }) => repoService.getReposByUser(username, pageParam, perPage),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    select: ({ pages }) => pages.flatMap((page) => page),
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  });
};
