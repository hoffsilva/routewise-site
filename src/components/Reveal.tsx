'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Phase = 'static' | 'hidden' | 'shown';

/**
 * Fades its content up the first time it scrolls into view. Progressive: the server HTML is visible
 * (no JS, slow load); only content still below the fold is hidden once the script runs.
 */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>('static');

  useEffect(() => {
    const node = ref.current;
    if (!node || node.getBoundingClientRect().top < window.innerHeight) return;

    setPhase('hidden');
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setPhase('shown');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const motion = phase === 'static'
    ? ''
    : `transition-[opacity,translate] duration-[600ms] ease-out ${phase === 'shown' ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`;

  return (
    <div ref={ref} className={`${motion} ${className}`}>
      {children}
    </div>
  );
}
