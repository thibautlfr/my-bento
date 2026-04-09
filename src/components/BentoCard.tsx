import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';

const bentoCardVariants = cva(
  'flex flex-col justify-between rounded-xl border p-6',
  {
    variants: {
      size: {
        default: 'w-[175px] h-[175px] max-w-[calc(50%-12px)] sm:max-w-none',
        sm: 'w-[175px] h-[67.5px] max-w-[calc(50%-12px)] sm:max-w-none',
        'md-w': 'w-[374px] h-[175px] max-w-full',
        'md-h': 'w-[175px] h-[374px] max-w-[calc(50%-12px)] sm:max-w-none',
        xl: 'h-[374px] w-[374px] max-w-full',
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
  image,
  ...props
}: React.ComponentProps<'a'> &
  VariantProps<typeof bentoCardVariants> & {
    icon?: React.ReactNode;
    image?: string;
  }) {
  if (size === 'md-w' && image) {
    const classes = cn(bentoCardVariants({ size }), "flex-row! gap-4 transition-opacity", href && "hover:opacity-80", className);
    const content = (
      <>
        <div className="w-[50%] flex flex-col justify-between space-y-2">
          {icon && (
            <div className="h-10 w-10 rounded-lg border p-2">{icon}</div>
          )}
          <div>
            <p className="font-light tracking-tight text-balance">
              {children}
            </p>
          </div>
        </div>
        <div className="w-[50%] overflow-hidden rounded-lg border bg-blue-200">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </>
    );

    return href ? (
      <a href={href} className={classes} {...(props as any)}>
        {content}
      </a>
    ) : (
      <div className={classes} {...(props as any)}>
        {content}
      </div>
    );
  }

  const classes = cn(bentoCardVariants({ size }), className);
  const content = (
    <>
      {icon && (
        <div className="h-10 w-10 rounded-lg border p-2">{icon}</div>
      )}
      <p className="line line-clamp-2 text-sm/5 font-light tracking-tight">
        {children}
      </p>
      {icon && size === 'default' && (
        <Button className="w-[75%]" size="sm" variant="outline">
          Follow
        </Button>
      )}
    </>
  );

  return href ? (
    <a href={href} className={classes} {...(props as any)}>
      {content}
    </a>
  ) : (
    <div className={classes} {...(props as any)}>
      {content}
    </div>
  );
}
