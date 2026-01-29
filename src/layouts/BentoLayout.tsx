import * as React from 'react';
import { useDebugMode } from '../hooks/useDebugMode';

// eslint-disable-next-line react-refresh/only-export-components
function Root({ children }: { children: React.ReactNode }) {
  const isDebug = useDebugMode();

  return (
    // In mobile, we want the main container height to be height viewport - footer
    <div
      className={`mx-auto flex w-full max-w-[428px] flex-col gap-6 p-6 lg:mx-0 lg:grid lg:min-h-screen lg:max-w-none lg:grid-cols-[350px_1fr] lg:gap-20 lg:p-16 ${isDebug ? 'bg-red-200' : ''}`}
    >
      {children}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Sidebar({ children }: { children: React.ReactNode }) {
  const isDebug = useDebugMode();

  return (
    // In desktop, we want the sidebar height to be :
    // height viewport - 208px
    // 208 = padding top (64px) + padding bottom (64px) + footer height (80px)
    <aside
      className={`flex flex-col lg:sticky lg:top-16 lg:h-[calc(100vh-208px)] ${isDebug ? 'bg-blue-200' : ''}`}
    >
      {children}
    </aside>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Content({ children }: { children: React.ReactNode }) {
  const isDebug = useDebugMode();

  return (
    <main
      className={`flex min-h-[70vh] w-full flex-col ${isDebug ? 'bg-green-200' : ''}`}
    >
      {children}
    </main>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Footer({ children }: { children: React.ReactNode }) {
  const isDebug = useDebugMode();

  return (
    <>
      {/* Desktop */}
      <div
        className={`fixed bottom-0 mb-16 ml-16 hidden h-[80px] w-[350px] items-center justify-center p-4 lg:flex ${isDebug ? 'bg-yellow-200' : ''}`}
      >
        {children}
      </div>

      {/* Mobile */}
      <div
        className={`flex h-[112px] w-full items-center justify-center px-6 py-10 lg:hidden ${isDebug ? 'bg-yellow-200' : 'bg-gray-50'}`}
      >
        {/* (max-w container - padding) -> 428-48 and 48 is for (p-6*2) since p-6 of tailwind is 24px */}
        <div
          className={`flex w-full max-w-[calc(428px-48px)] justify-center p-4 text-center ${isDebug ? 'bg-yellow-300' : ''}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export const BentoLayout = { Root, Sidebar, Content, Footer };
