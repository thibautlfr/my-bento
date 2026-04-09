import type { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-foreground underline transition-colors"
    >
      {children}
    </a>
  );
}
