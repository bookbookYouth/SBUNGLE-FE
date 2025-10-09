import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';

import logoIcon from '@/assets/logo.png';

function SplashPage() {
  return (
    <Flex direction="column" gap="12px" height="100vh" justifyContent="center">
      <img src={logoIcon} alt="blur" height={'120px'} />
      <Txt typo="subTitle_sm_bold">독립서점 연계 블라인드 북 추천 서비스</Txt>
    </Flex>
  );
}

export default SplashPage;
