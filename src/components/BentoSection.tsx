import type { BentoSectionData } from '@/types/bento.ts';
import { iconMap } from '@/lib/iconMap.tsx';
import { imageMap } from '@/lib/imageMap.ts';
import BentoCard from '@/components/BentoCard.tsx';

interface BentoSectionProps {
  data: BentoSectionData;
}

export default function BentoSection({ data }: BentoSectionProps) {
  return (
    <>
      {data.title && (
        <h2 className="text-2xl font-medium tracking-tight text-balance">
          {data.title}
        </h2>
      )}
      <section className="flex flex-row flex-wrap gap-6">
        {data.items.map((item) => (
          <BentoCard
            key={item.id}
            href={item.href}
            size={item.size}
            buttonText={item.buttonText}
            icon={item.iconId ? iconMap[item.iconId] : undefined}
            image={item.imageId ? imageMap[item.imageId] : undefined}
          >
            {item.children}
          </BentoCard>
        ))}
      </section>
    </>
  );
}


