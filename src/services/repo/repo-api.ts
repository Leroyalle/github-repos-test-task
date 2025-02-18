import { ApiRoutesEnum, Repo } from '@/types';
import { $fetch } from '../instance';

class RepoService {
  public async getReposByUser(username: string, page: number, perPage: number): Promise<Repo[]> {
    return $fetch.get<Repo[]>(
      `${ApiRoutesEnum.USER}${username ? `/${username}` : ''}${
        ApiRoutesEnum.REPOS
      }?page=${page}&per_page=${perPage}`,
      true,
    );
  }
}

export const repoService = new RepoService();
