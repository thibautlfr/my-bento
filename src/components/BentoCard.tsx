import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';

const bentoCardVariants = cva(
  'flex flex-col justify-between rounded-xl border p-6',
  {
    variants: {
      size: {
        default: 'w-[175px] h-[175px]',
        sm: 'w-[390px] h-[67.5px]',
        'md-w': 'w-[390px] h-[175px]',
        'md-h': 'w-[175px] h-[390px]',
        xl: 'h-[390px] w-[390px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export default function BentoCard({
  className,
  size = 'default',
  children,
  href,
  icon,
  ...props
}: React.ComponentProps<'a'> &
  VariantProps<typeof bentoCardVariants> & {
    icon?: React.ReactNode;
  }) {
  const Comp = href ? 'a' : 'div';

  return (
    <Comp
      href={href}
      className={cn(bentoCardVariants({ size }), className)}
      {...props}
    >
      {icon && (
        <div className="h-[40px] w-[40px] rounded-lg border p-2">{icon}</div>
      )}
      <p className="line line-clamp-2 text-sm/5 font-light tracking-tight">
        {children}
      </p>
      {icon && size === 'default' && (
        <Button className="w-[75%]" size="sm" variant="outline">
          Follow
        </Button>
      )}
    </Comp>
  );
}
