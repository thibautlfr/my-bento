import thibautlfrImg from '@/assets/thibautlfr.webp';
import { ScrollText } from 'lucide-react';

import networksData from '@/data/networks.json';
import projectsData from '@/data/projects.json';

import BentoCard from '@/components/BentoCard.tsx';
import BentoSection from '@/components/BentoSection.tsx';
import type { BentoSectionData } from '@/types/bento.ts';

const networksSectionData: BentoSectionData = networksData;
const projectsSectionData: BentoSectionData = projectsData;

export default function BentoGrid() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <section className="flex flex-row flex-wrap gap-6 lg:justify-center">
          <BentoCard
            size="md-w"
            icon={<ScrollText strokeWidth="1.5" />}
            href="https://drive.google.com/file/d/1jB79byTcTcsd6wpBqIZrdVSW9R9Alj_k/view?usp=sharing"
            image={thibautlfrImg}
          >
            My resume (CV)
          </BentoCard>
        </section>

        <BentoSection data={networksSectionData} />
        <BentoSection data={projectsSectionData} />
      </div>
    </>
  );
}
