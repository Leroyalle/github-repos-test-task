import { repoService } from './repo-api';
import { $fetch } from '../instance';
import { ApiRoutesEnum } from '@/types';

jest.mock('../instance', () => ({
  $fetch: {
    get: jest.fn(),
  },
}));

const mockParams = {
  username: 'testuser',
  page: 1,
  perPage: 10,
};

describe('RepoService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('должен формировать правильный URL и возвращать данные', async () => {
    const mockData = [
      {
        id: 1,
        name: 'repo1',
        description: 'desc1',
        stargazers_count: 10,
        updated_at: '2020-01-01T00:00:00Z',
        html_url: 'https://github.com/testuser/repo1',
      },
    ];
    ($fetch.get as jest.Mock).mockResolvedValue(mockData);

    const result = await repoService.getReposByUser(
      mockParams.username,
      mockParams.page,
      mockParams.perPage,
    );

    expect($fetch.get).toHaveBeenCalledTimes(1);

    expect($fetch.get).toHaveBeenCalledWith(
      `${ApiRoutesEnum.USER}/${mockParams.username}${ApiRoutesEnum.REPOS}?page=${mockParams.page}&per_page=${mockParams.perPage}`,
      true,
    );

    expect(result).toMatchObject([{ id: expect.any(Number), name: expect.any(String) }]);
  });

  it('должен обрабатывать ошибки при запросе', async () => {
    const mockError = new Error('Network error');
    ($fetch.get as jest.Mock).mockRejectedValue(mockError);

    await expect(
      repoService.getReposByUser(mockParams.username, mockParams.page, mockParams.perPage),
    ).rejects.toThrow('Network error');

    expect($fetch.get).toHaveBeenCalledTimes(1);

    expect($fetch.get).toHaveBeenCalledWith(
      `${ApiRoutesEnum.USER}/${mockParams.username}${ApiRoutesEnum.REPOS}?page=${mockParams.page}&per_page=${mockParams.perPage}`,
      true,
    );
  });
});
