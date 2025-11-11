import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'subtle';
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  variant = 'default',
  hoverable = false,
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-lg p-8 transition-colors';

  const variants = {
    default:
      'bg-neutral-700/50 backdrop-blur-sm border border-neutral-600 hover:border-neutral-500',
    glass:
      'bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20',
    subtle: 'bg-neutral-700/30 border border-neutral-700 hover:border-neutral-600',
  };

  const hoverStyles = hoverable ? 'cursor-pointer' : '';

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
