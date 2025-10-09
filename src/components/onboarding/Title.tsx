import { Flex } from '../base/Flex';
import { Link } from '../base/Link';
import { Txt } from '../base/Txt';

interface TitleProps {
  pointTitle: string;
  firstLineTitle: string;
  secondLineTitle: string;
  subTitle: string;
}

export const Title = ({ pointTitle, firstLineTitle, secondLineTitle, subTitle }: TitleProps) => {
  return (
    <Flex width="100%" justifyContent="space-between">
      <Flex direction="column" gap="8px">
        <Txt typo="point_lg">
          <Txt typo="point_lg" color="primary">
            {pointTitle}
          </Txt>
          {firstLineTitle}
          <br />
          {secondLineTitle}
        </Txt>
        <Txt typo="subTitle_regular" color="gray300">
          {subTitle}
        </Txt>
      </Flex>
      <Link url="/">
        <Txt typo="subTitle_regular" color="gray200" underline>
          건너뛰기
        </Txt>
      </Link>
    </Flex>
  );
};
