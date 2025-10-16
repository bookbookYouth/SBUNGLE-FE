import { useNavigate } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';
import GenericForm from '@/components/base/GenericForm';
import { Header } from '@/components/common/Header';
import { SurveySetup, type SurveySetupProps } from '@/components/onboarding';
import { ROUTES } from '@/config/appConfig';
import { STEPS } from '@/constants/onboarding';
import { useFunnel } from '@/hooks/useFunnel';

import { container } from '@/styles/page/onboarding.css';

function SurveyPage() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(STEPS[0]);
  const navigate = useNavigate();

  const handleNextClick = (nextStep: string) => {
    setStep(nextStep);
  };

  const hanldePrevClick = () => {
    const i = STEPS.indexOf(currentStep);
    if (i > 0) setStep(STEPS[i - 1]);
  };

  const onSubmit = (data: SurveySetupProps) => {
    // api 연동
    console.log(data);
    navigate(ROUTES.home);
  };

  return (
    <Flex direction="column">
      <Header isBack={STEPS.indexOf(currentStep) === 0 ? false : true} handleBack={hanldePrevClick} />
      <div className={container}>
        <GenericForm<SurveySetupProps> formOptions={{ mode: 'onChange' }} onSubmit={onSubmit}>
          <SurveySetup handleNextClick={handleNextClick} Funnel={Funnel} Step={Step} />
        </GenericForm>
      </div>
    </Flex>
  );
}

export default SurveyPage;
