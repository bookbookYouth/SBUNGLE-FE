import Like from '@/assets/like.svg?react';
import { Flex } from '@/components/base/Flex';
import { Hr } from '@/components/base/Hr';
import { Txt } from '@/components/base/Txt';
import { getGenreColor } from '@/utils/home/getGenreColor';
import { getGenreName } from '@/utils/home/getGenreName';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface CardProps {
  theme?: 'small' | 'large';
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  rank?: number;
  genre?: string;
  like?: boolean;
  liked?: boolean;
  onClick?: () => void;
}

export const Card = ({ theme = 'large', top, bottom, rank, genre, like = false, liked, onClick }: CardProps) => {
  const handleLiked = () => {
    // api 연동
  };

  return (
    <button
      className={sprinkles({ cursor: 'pointer' })}
      style={{
        border: `1px solid ${paletteTheme.palette.black}`,
        width: theme === 'large' ? '180px' : '152px',
        minWidth: theme === 'large' ? '100%' : '152px',
        height: '268px',
        overflow: 'hidden',
        padding: 0,
        textDecoration: 'none',
        color: `${paletteTheme.palette.black}`,
      }}
      onClick={onClick}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
        width="100%"
        overflowX="hidden"
        overflowY="hidden"
        style={{ position: 'relative' }}
      >
        <>
          <Flex
            justifyContent="space-between"
            height="32px"
            width="100%"
            style={{ position: 'absolute', top: '16px', padding: theme === 'small' ? '0 8px' : '0 12px' }}
          >
            <Flex gap="8px" height="100%">
              {rank && (
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="background"
                  width="28px"
                  height="100%"
                  style={{ border: `1px solid ${paletteTheme.palette.black}` }}
                >
                  <Txt typo="point_ml">{rank}</Txt>
                </Flex>
              )}
              {genre && (
                <Flex
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="transparent"
                  style={{
                    padding: '7px 12px',
                    border: `1px solid ${getGenreColor(genre) === 'black' ? paletteTheme.palette.black : paletteTheme.palette.white}`,
                  }}
                >
                  <Txt typo="content_xs_bold" color={getGenreColor(genre)}>
                    {getGenreName(genre)}
                  </Txt>
                </Flex>
              )}
            </Flex>
            {like && (
              <Like
                height="32px"
                width="32px"
                color="white"
                fill={liked ? 'white' : 'transparent'}
                onClick={handleLiked}
              />
            )}
          </Flex>
          {top}
        </>
      </Flex>
      <Hr height="1px" />
      <Flex
        width="100%"
        height="68px"
        alignItems="center"
        justifyContent="flex-start"
        style={{ padding: theme === 'small' ? '0 8px' : '0 12px', textAlign: 'start' }}
      >
        {bottom}
      </Flex>
    </button>
  );
};
