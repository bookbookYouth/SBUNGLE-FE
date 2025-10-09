import { useEffect, useMemo, useState } from 'react';

import { STEPS } from '@/constants/onboarding';

import { sprinkles } from '@/styles/sprinkles.css';

export const StepBar = ({ step }: { step: number }) => {
  const target = useMemo(() => Math.min(step, STEPS.length) / STEPS.length, [step]);
  const prev = useMemo(() => Math.min(step - 1, STEPS.length) / STEPS.length, [step]);
  const [progress, setProgress] = useState(prev);

  useEffect(() => {
    const id = requestAnimationFrame(() => setProgress(target));
    return () => cancelAnimationFrame(id);
  }, [target]);

  return (
    <div
      className={sprinkles({ backgroundColor: 'gray100' })}
      style={{ position: 'relative', width: '100%', height: '4px' }}
    >
      <div
        className={sprinkles({ backgroundColor: 'primary' })}
        style={{
          position: 'absolute',
          height: '100%',
          width: `${progress * 100}%`,
          transition: 'width .45s ease',
        }}
      />
    </div>
  );
};
