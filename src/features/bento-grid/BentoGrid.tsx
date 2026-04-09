import thibautlfrImg from '@/assets/thibautlfr.webp';
import youbookMarseilleImg from '@/assets/projects/youbook_marseille.webp';
import oceanHeartbeatImg from '@/assets/projects/ocean_heartbeat.webp';
import trinityExpImg from '@/assets/projects/trinity_exp.webp';
import galaxyConfiguratorImg from '@/assets/projects/galaxy_configurator.webp';
import ragingSeaImg from '@/assets/projects/raging_sea.webp';

import {
  FishIcon,
  Globe,
  LucideLinkedin,
  Music,
  ScrollText,
  Star,
  Waves,
} from 'lucide-react';
import { SiFigma, SiGithub, SiX } from '@icons-pack/react-simple-icons';
import BentoCard from '@/components/BentoCard.tsx';

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

        <h2 className="text-2xl font-medium tracking-tight text-balance">
          Social networks
        </h2>

        <section className="flex flex-row flex-wrap gap-6">
          <BentoCard
            href="https://www.linkedin.com/in/thibaut-lefrancois/"
            icon={<LucideLinkedin strokeWidth="1.5" />}
          >
            Let's connect !
          </BentoCard>

          <BentoCard
            href="https://github.com/thibautlfr"
            icon={<SiGithub strokeWidth="1.5" />}
            buttonText="Discover"
          >
            IT projects
          </BentoCard>

          <BentoCard
            href="https://www.figma.com/@thibautlfr"
            icon={<SiFigma strokeWidth="1.5" />}
            buttonText="Explore"
          >
            My designs
          </BentoCard>

          <BentoCard
            href="https://www.linkedin.com/in/thibaut-lefrancois/"
            icon={<SiX strokeWidth="1.5" />}
          >
            Let's chat !
          </BentoCard>
        </section>

        <h2 className="text-2xl font-medium tracking-tight text-balance">
          Some projects
        </h2>

        <section className="flex flex-row flex-wrap gap-6">
          <BentoCard
            href="https://www.marseille-tourisme.com/experience/"
            size="md-w"
            image={youbookMarseilleImg}
            icon={<Globe strokeWidth="1.5" />}
          >
            Youbook - Marseille
          </BentoCard>

          <BentoCard
            href="https://ocean-heartbeat.netlify.app/"
            size="md-w"
            image={oceanHeartbeatImg}
            icon={<FishIcon strokeWidth="1.5" />}
          >
            Ocean Heartbeat
          </BentoCard>

          <BentoCard
            href="https://ragingsea-experience.netlify.app/"
            size="md-w"
            image={ragingSeaImg}
            icon={<Waves strokeWidth="1.5" />}
          >
            Raging sea
          </BentoCard>

          <BentoCard
            href="https://thibautlfr-exp001.netlify.app/"
            size="md-w"
            image={trinityExpImg}
            icon={<Music strokeWidth="1.5" />}
          >
            Trinity experience
          </BentoCard>

          <BentoCard
            href="https://galaxy-configurator.netlify.app/"
            size="md-w"
            image={galaxyConfiguratorImg}
            icon={<Star strokeWidth="1.5" />}
          >
            Galaxy configurator
          </BentoCard>
        </section>
      </div>
    </>
  );
}
