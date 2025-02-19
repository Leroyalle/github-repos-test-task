import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared';
import { Stars, Updated, RepoLink } from './ui';

interface Props {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

export const RepoCard: React.FC<Props> = ({
  id,
  name,
  description,
  stargazers_count,
  updated_at,
  html_url,
}) => {
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 select-none">
          <Stars stars={stargazers_count} />
          <Updated updatedAt={updated_at} />
          <RepoLink href={html_url} className="ml-auto" />
        </div>
      </CardContent>
    </Card>
  );
};
