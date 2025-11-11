import Card from '@/components/ui/Card';

interface BentoCardProps {
  title: string;
  description: string;
  url?: string;
  icon?: string;
  tags?: string[];
  onClick?: () => void;
}

export default function BentoCard({
  title,
  description,
  url,
  icon,
  tags = [],
  onClick,
}: BentoCardProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Card
      variant="default"
      hoverable
      onClick={url || onClick ? handleClick : undefined}
    >
      <div className="flex flex-col h-full">
        {/* Icon if provided (for socials) */}
        {icon && (
          <div className="mb-3 text-neutral-400">
            <span className="text-sm">{icon}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

        {/* Description */}
        <p className="text-neutral-400 mb-4 flex-grow">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
