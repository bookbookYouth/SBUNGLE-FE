import { STEPS } from '@/constants/onboarding';
import type { FunnelProps, StepProps } from '@/hooks/useFunnel';

import { BasicInfo } from './BasicInfo';
import { Genre } from './Genre';
import { Preference } from './Preference';

export interface SurveySetupProps {
  handleNextClick: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

export const SurveySetup = ({ handleNextClick, Funnel, Step }: SurveySetupProps) => {
  return (
    <Funnel>
      <Step name={STEPS[0]}>
        <BasicInfo onNext={() => handleNextClick(STEPS[1])} />
      </Step>
      <Step name={STEPS[1]}>
        <Genre onNext={() => handleNextClick(STEPS[2])} />
      </Step>
      <Step name={STEPS[2]}>
        <Preference />
      </Step>
    </Funnel>
  );
};
