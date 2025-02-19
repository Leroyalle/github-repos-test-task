import { ApiRoutesEnum, Repo } from '@/types';
import { api } from '../instance';

export const repoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReposByUser: build.query<Repo[], { username: string; page: number; perPage: number }>({
      query: ({ username, page, perPage }) => ({
        url: `${ApiRoutesEnum.USER}/${username}${ApiRoutesEnum.REPOS}`,
        params: {
          page,
          per_page: perPage,
        },
      }),
      serializeQueryArgs: ({ queryArgs }) => queryArgs.username,
      merge: (currentCache, newItems, { arg }) => {
        if (currentCache.length === 0 || arg.page === 1) {
          return newItems;
        }
        return [...currentCache, ...newItems];
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.page !== previousArg?.page || currentArg?.username !== previousArg?.username
        );
      },
    }),
  }),
});

export const { useGetReposByUserQuery } = repoApi;
