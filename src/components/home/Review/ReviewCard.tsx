import { memo, useCallback, useMemo, useState } from 'react';
import { format } from 'date-fns/format';

import { Badge } from '@/components/base/Badge';
import { Button } from '@/components/base/Button';
import { Flex } from '@/components/base/Flex';
import { If } from '@/components/base/If';
import { Txt } from '@/components/base/Txt';
import { StarDisplay } from '@/components/home/Review/StarDisplay';
import type { Review } from '@/mock/bookData';

import thumbDownIcon from '@/assets/thumbDown.svg';
import thumbUpIcon from '@/assets/thumbUp.svg';

export const ReviewCard = memo(({ id, score, reviewer, content, like, unlike, isSpoiled, registeredAt }: Review) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(isSpoiled);

  // spolier blur
  const handleSpoilerBlur = useCallback(() => {
    setIsBlurred(false);
  }, [setIsBlurred]);

  // like
  const handleLike = useCallback((id: string) => {
    // api 연동
  }, []);

  // unlike
  const handleUnlike = useCallback((id: string) => {
    // api 연동
  }, []);

  const buttonList = useMemo(
    () => [
      { label: 'like', icon: thumbUpIcon, count: like, handler: () => handleLike(id) },
      { label: 'unlike', icon: thumbDownIcon, count: unlike, handler: () => handleUnlike(id) },
    ],
    [like, unlike, handleLike, handleUnlike, id],
  );

  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="8px"
      style={{ padding: '20px' }}
    >
      <Flex
        direction="row"
        height="35px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: '0 12px' }}
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
      <Flex height="22px" width="100%" direction="row" justifyContent="space-between" alignItems="center">
        <Txt typo="subTitle_bold">{reviewer.slice(0, -1) + '*'}</Txt>
        <Txt typo="content_sm" color="gray300">
          {format(new Date(registeredAt), 'yyyy.MM.dd')}
        </Txt>
      </Flex>
      <div
        role="button"
        style={{ position: 'relative', width: '100%', cursor: isBlurred ? 'pointer' : 'default' }}
        onClick={handleSpoilerBlur}
      >
        <Flex
          height="fit-content"
          width="100%"
          alignItems="center"
          justifyContent="center"
          style={{ filter: isBlurred ? 'blur(3.5px)' : 'none' }}
        >
          <Txt typo="subTitle_regular" style={{ width: '100%' }}>
            {content}
          </Txt>
        </Flex>
        <If condition={!!isBlurred}>
          <Txt
            typo="subTitle_bold"
            color="primary"
            style={{
              width: '100%',
              position: 'absolute',
              textAlign: 'center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            탭하여 스포일러 리뷰 읽기
          </Txt>
        </If>
      </div>
      <Flex
        direction="row"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        gap="13px"
        style={{ paddingTop: '8px' }}
      >
        {buttonList.map((button) => (
          <Button key={button.label} width="fit-content" height="40px" onClick={button.handler}>
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
});
