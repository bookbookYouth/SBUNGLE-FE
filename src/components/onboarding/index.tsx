import { BasicInfo } from '@/components/onboarding/BasicInfo';
import { Genre } from '@/components/onboarding/Genre';
import { Preference } from '@/components/onboarding/Preference';
import { STEPS } from '@/constants/onboarding';
import type { FunnelProps, StepProps } from '@/hooks/useFunnel';

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
