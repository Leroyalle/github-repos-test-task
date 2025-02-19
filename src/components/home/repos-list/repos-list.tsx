import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
} from '@/components/shared';
import { Repo } from '@/types';
import { ReposListSkeleton } from './repos-list-skeleton';

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
        <Card key={repo.id}>
          <CardHeader>
            <CardTitle>{repo.name}</CardTitle>
            <CardDescription>{repo.description}</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      ))}
    </div>
  );
};
