import React from 'react';

interface Props {
  href: string;
  className?: string;
}

export const RepoCardLink: React.FC<Props> = ({ href, className }) => {
  return (
    <a href={href} target="_blank" className={className}>
      Go to GitHub
    </a>
  );
};
