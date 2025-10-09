import { STEPS } from '@/constants/onboarding';

import { sprinkles } from '@/styles/sprinkles.css';

export const StepBar = ({ step }: { step: number }) => {
  return (
    <div
      className={sprinkles({ backgroundColor: 'gray100' })}
      style={{ position: 'relative', width: '100%', height: '4px' }}
    >
      <div
        className={sprinkles({ backgroundColor: 'primary' })}
        style={{ position: 'absolute', width: `calc(100%/${STEPS.length} * ${step})`, height: '100%' }}
      />
    </div>
  );
};
