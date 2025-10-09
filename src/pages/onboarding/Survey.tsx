import { Flex } from '@/components/base/Flex';
import GenericForm from '@/components/base/GenericForm';
import { Header } from '@/components/common/Header';
import { SurveySetup, type SurveySetupProps } from '@/components/onboarding';
import { STEPS } from '@/constants/onboarding';
import { useFunnel } from '@/hooks/useFunnel';

import { container } from '@/styles/page/onboarding.css';

function SurveyPage() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(STEPS[0]);

  const nextClickHandler = (nextStep: string) => {
    setStep(nextStep);
  };

  const prevClickHandler = () => {
    const i = STEPS.indexOf(currentStep);
    if (i > 0) setStep(STEPS[i - 1]);
  };

  const onSubmit = () => {
    // api 연동
  };

  return (
    <Flex direction="column" width="100%">
      <Header isLeft={STEPS.indexOf(currentStep) === 0 ? false : true} handleBack={prevClickHandler} />
      <div className={container}>
        <GenericForm<SurveySetupProps> formOptions={{ mode: 'onChange' }} onSubmit={onSubmit}>
          <SurveySetup nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
        </GenericForm>
      </div>
    </Flex>
  );
}

export default SurveyPage;
