import thibautlfrImg from '@/assets/thibautlfr.webp';
import { ScrollText } from 'lucide-react';

export default function BentoGrid() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
          {/* Card bento 1height 2width*/}
          <a
            href="https://drive.google.com/file/d/1jB79byTcTcsd6wpBqIZrdVSW9R9Alj_k/view?usp=sharing"
            className="flex h-[175px] w-[390px] rounded-xl border p-6 transition-opacity hover:opacity-80"
          >
            <div className="w-[50%] space-y-2">
              <div className="h-[40px] w-[40px] rounded-lg border p-2">
                <ScrollText strokeWidth="1.5" />
              </div>
              <div>
                <p className="font-light tracking-tight text-balance">
                  My resume (CV)
                </p>
                <p className="text-muted-foreground text-xs font-light tracking-tight text-balance">
                  drive.google.com
                </p>
              </div>
            </div>
            <div className="w-[50%] overflow-hidden rounded-lg border bg-blue-200">
              <img
                src={thibautlfrImg}
                alt="Thibaut"
                className="h-full w-full object-cover"
              />
            </div>
          </a>
        </section>
    </>
  );
}
