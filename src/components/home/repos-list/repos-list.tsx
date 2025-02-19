import React from 'react';
import { cn } from '@/lib/utils';
import { EmptyState } from '@/components/shared';
import { Repo } from '@/types';
import { ReposListSkeleton } from './repos-list-skeleton';
import { RepoCard } from './repo-card';

interface Props {
  repos: Repo[] | undefined;
  isLoading: boolean;
  className?: string;
}

export const ReposList: React.FC<Props> = ({ repos, isLoading, className }) => {
  if (isLoading) {
    return <ReposListSkeleton />;
  }

  if (!repos || repos.length === 0) {
    return (
      <EmptyState
        text="Your search did not match any repositories"
        imageUrl="/img/states/not-found.png"
        className="mt-8"
      />
    );
  }
  return (
    <div className={cn('flex flex-col gap-y-3', className)}>
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          id={repo.id}
          name={repo.name}
          description={repo.description}
          stargazers_count={repo.stargazers_count}
          updated_at={repo.updated_at}
          html_url={repo.html_url}
        />
      ))}
    </div>
  );
};
