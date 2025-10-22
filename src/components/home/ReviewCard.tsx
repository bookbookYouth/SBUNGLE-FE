import { format } from 'date-fns/format';

import type { Review } from '@/mock/bookData';

import { Badge } from '../base/Badge';
import { Button } from '../base/Button';
import { Flex } from '../base/Flex';
import { Txt } from '../base/Txt';
import { StarDisplay } from './StarDisplay';

import thumbDownIcon from '@/assets/thumbDown.svg';
import thumbUpIcon from '@/assets/thumbUp.svg';

export const ReviewCard = ({ id, score, reviewer, content, like, unlike, isSpoiled, registeredAt }: Review) => {
  const handleLike = (id: string) => {
    // api 연동
  };
  const handleUnlike = (id: string) => {
    // api 연동
  };

  const buttonList = [
    { label: 'like', icon: thumbUpIcon, count: like, handler: () => handleLike(id) },
    { label: 'unlike', icon: thumbDownIcon, count: unlike, handler: () => handleUnlike(id) },
  ];

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" gap="8px" style={{ padding: '20px' }}>
      <Flex
        direction="row"
        height="35px"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: '0 12px', width: '100%' }}
      >
        <Flex direction="row" justifyContent="center" alignItems="center" gap="8px">
          <StarDisplay score={score} size="small" />
          <Txt typo="subTitle_bold">{score}</Txt>
        </Flex>
        <Badge color={isSpoiled ? 'primary' : 'gray200'}>
          <Txt typo="subTitle_sm_bold" color={isSpoiled ? 'primary' : 'gray200'}>
            {isSpoiled ? '스포일러 포함' : '스포일러 미포함'}
          </Txt>
        </Badge>
      </Flex>
      <Flex height="22px" direction="row" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
        <Txt typo="subTitle_bold">{reviewer.slice(0, -1) + '*'}</Txt>
        <Txt typo="content_sm" color="gray300">
          {format(new Date(registeredAt), 'yyyy.MM.dd')}
        </Txt>
      </Flex>
      <Txt typo="subTitle_regular" style={{ width: '100%' }}>
        {content}
      </Txt>
      <Flex
        direction="row"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        gap="13px"
        style={{ paddingTop: '8px' }}
      >
        {buttonList.map((button) => (
          <Button width="fit-content" height="40px" key={button.label} onClick={button.handler}>
            <Flex
              width="48px"
              height="24px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap="4px"
              style={{ padding: '7px 10px', boxSizing: 'content-box' }}
            >
              <img src={button.icon} alt={button.label} />
              <Txt typo="subTitle_regular">{button.count}</Txt>
            </Flex>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
