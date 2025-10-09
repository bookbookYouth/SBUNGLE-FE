import KakaoButton from '@/assets/kakao.svg?react';
import { Carousel } from '@/components/base/Carousel';
import { Flex } from '@/components/base/Flex';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';

import { sprinkles } from '@/styles/sprinkles.css';
import onboardingImg1 from '@/assets/onboarding1.svg';
import onboardingImg2 from '@/assets/onboarding2.svg';
import onboardingImg3 from '@/assets/onboarding3.svg';

function OnboardingPage() {
  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Spacing height="106px" />
      <Txt typo="point_lg">
        더 이상 책 앞에서 고민하지 말고, <br />
        <Txt typo="point_lg" color="primary">
          발견하는 설렘
        </Txt>
        을 느껴보세요
      </Txt>
      <Spacing height="12px" />
      <Carousel imgArray={[onboardingImg1, onboardingImg2, onboardingImg3]} color="orange" />
      <Spacing height="calc(100vh - 106px - 414px - 52px - 28px )" />
      {/*화면 전체 - (Spacing) - (Title + Carousel) - (kakaoButton) - (bottomPadding)   */}
      <KakaoButton
        className={sprinkles({ cursor: 'pointer' })}
        width="100%"
        height="52px"
        style={{ maxWidth: '362px' }}
      />
    </Flex>
  );
}

export default OnboardingPage;
