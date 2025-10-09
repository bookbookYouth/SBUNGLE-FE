import { type ReactElement, useState } from 'react';

export interface StepProps {
  name: string;
  children: React.ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState<string>(defaultStep); // 현재 step 관리

  // 각 단계를 나타내는 Step 컴포넌트 - children으로 각 스텝 컨텐츠 렌더링
  const Step = ({ children }: Omit<StepProps, 'name'>) => {
    return <>{children}</>;
  };

  // 여러 단계의 Step 컴포넌트 중, 현재 활성화된 스텝을 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
