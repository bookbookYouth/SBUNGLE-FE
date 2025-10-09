import { STEPS } from '@/constants/onboarding';
import type { FunnelProps, StepProps } from '@/hooks/useFunnel';

import { BasicInfo } from './BasicInfo';
import { Genre } from './Genre';
import { Preference } from './Preference';

export interface SurveySetupProps {
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

export const SurveySetup = ({ nextClickHandler, Funnel, Step }: SurveySetupProps) => {
  return (
    <Funnel>
      <Step name={STEPS[0]}>
        <BasicInfo onNext={() => nextClickHandler(STEPS[1])} />
      </Step>
      <Step name={STEPS[1]}>
        <Genre onNext={() => nextClickHandler(STEPS[2])} />
      </Step>
      <Step name={STEPS[2]}>
        <Preference />
      </Step>
    </Funnel>
  );
};
