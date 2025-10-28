import {motion} from 'motion/react';
import type {ReactNode} from 'react';

interface CrossLayoutProps {
  children: ReactNode;
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  // Timing
  topBarDuration: 0.8,
  sideBarsDuration: 1,
  sideBarsDelay: 1,
  bottomBarsDuration: 1,
  bottomBarsDelay: 2,
  cornersRotationDuration: 4,
  textDelay: 2.5,

  // Easing
  lineEasing: 'circInOut' as const,
  textEasing: 'easeInOut' as const,

  // Dimensions (percentage)
  margin: 5,
  padding: 10,
} as const;

function CrossLayout({ children }: CrossLayoutProps) {
  return (
    <div className="relative flex h-screen w-screen bg-neutral-800 overflow-hidden">
      {/* Top bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: ANIMATION_CONFIG.topBarDuration,
          ease: ANIMATION_CONFIG.lineEasing,
        }}
        className="absolute top-[5%] left-[8%] right-[8%] h-[1px] bg-white"
      />

      {/* Left bar */}
      <motion.div
        className="absolute left-[5%] top-[10%] w-[1px] bg-white"
        initial={{ height: 0 }}
        animate={{ height: '80%' }}
        transition={{
          duration: ANIMATION_CONFIG.sideBarsDuration,
          ease: ANIMATION_CONFIG.lineEasing,
          delay: ANIMATION_CONFIG.sideBarsDelay,
        }}
      />

      {/* Right bar */}
      <motion.div
        className="absolute right-[5%] top-[10%] w-[1px] bg-white"
        initial={{ height: 0 }}
        animate={{ height: '80%' }}
        transition={{
          duration: ANIMATION_CONFIG.sideBarsDuration,
          ease: ANIMATION_CONFIG.lineEasing,
          delay: ANIMATION_CONFIG.sideBarsDelay,
        }}
      />

      {/* Bottom left bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '40%' }}
        transition={{
          duration: ANIMATION_CONFIG.bottomBarsDuration,
          ease: ANIMATION_CONFIG.lineEasing,
          delay: ANIMATION_CONFIG.bottomBarsDelay,
        }}
        className="absolute bottom-[5%] left-[8%] h-[1px] bg-white"
      />

      {/* Bottom right bar */}
      <motion.div
        className="absolute bottom-[5%] right-[8%] h-[1px] bg-white"
        initial={{ width: 0 }}
        animate={{ width: '40%' }}
        transition={{
          duration: ANIMATION_CONFIG.bottomBarsDuration,
          ease: ANIMATION_CONFIG.lineEasing,
          delay: ANIMATION_CONFIG.bottomBarsDelay,
        }}
      />

      {/* Bottom text background (to hide the line) */}
      <div className="pointer-events-none absolute bottom-[4%] left-[50%] -translate-x-1/2 bg-neutral-800 px-6 text-neutral-800">
        @thibautlfr
      </div>

      {/* Bottom text link */}
      <motion.a
        href="https://x.com/thibautlfr"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[4%] left-[50%] text-white text-xl -translate-x-1/2 bg-neutral-800 hover:text-neutral-300 transition-colors"
        style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: ANIMATION_CONFIG.textEasing,
          delay: ANIMATION_CONFIG.textDelay,
        }}
      >
        @thibautlfr
      </motion.a>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-[5%] left-[5%] text-white text-xl font-mono transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 1080 }}
        transition={{
          duration: ANIMATION_CONFIG.cornersRotationDuration,
          ease: ANIMATION_CONFIG.textEasing,
        }}
      >
        +
      </motion.div>

      <motion.div
        className="absolute top-[5%] right-[5%] text-white text-xl font-mono transform translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 1080 }}
        transition={{
          duration: ANIMATION_CONFIG.cornersRotationDuration,
          ease: ANIMATION_CONFIG.textEasing,
        }}
      >
        +
      </motion.div>

      <motion.div
        className="absolute bottom-[5%] left-[5%] text-white text-xl font-mono transform -translate-x-1/2 translate-y-1/2"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 1080 }}
        transition={{
          duration: ANIMATION_CONFIG.cornersRotationDuration,
          ease: ANIMATION_CONFIG.textEasing,
        }}
      >
        +
      </motion.div>

      <motion.div
        className="absolute bottom-[5%] right-[5%] text-white text-xl font-mono transform translate-x-1/2 translate-y-1/2"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 1080 }}
        transition={{
          duration: ANIMATION_CONFIG.cornersRotationDuration,
          ease: ANIMATION_CONFIG.textEasing,
        }}
      >
        +
      </motion.div>

      {/* Content area - positioned between the four lines */}
      <div className="absolute top-[10%] left-[8%] right-[8%] bottom-[10%] flex items-center justify-center overflow-auto no-scrollbar">
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}

export default CrossLayout;
