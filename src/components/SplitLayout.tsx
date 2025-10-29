import type { ReactNode } from 'react';

interface SplitLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function SplitLayout({
  leftContent,
  rightContent,
}: SplitLayoutProps) {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-32">
      {/* Left sidebar - sticky on desktop */}
      <div className="lg:sticky lg:top-0 lg:h-full overflow-y-auto no-scrollbar">
        <div className="h-full">{leftContent}</div>
      </div>

      {/* Right content - scrollable */}
      <div className="overflow-y-auto no-scrollbar h-full">{rightContent}</div>
    </div>
  );
}
