import { getGenreColor } from '@/utils/home/getGenreColor';
import { getGenreImg } from '@/utils/home/getGenreImg';
import { getGenreName } from '@/utils/home/getGenreName';

import { Flex } from '../base/Flex';
import { Txt } from '../base/Txt';

import { paletteTheme } from '@/styles/theme.css';

interface ImgCardProps {
  genre: string;
  title: string;
}

export const ImgCard = ({ genre, title }: ImgCardProps) => {
  return (
    <div
      style={{
        border: `2px solid ${paletteTheme.palette.black}`,
        width: '100%',
        height: '520px',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
      }}
    >
      <Flex direction="column" width="100%" gap="8px" style={{ position: 'absolute', top: 0, padding: '28px' }}>
        {genre && (
          <Flex
            height="100%"
            justify-content="center"
            align-items="center"
            backgroundColor="transparent"
            style={{
              padding: '7px 12px',
              border: `1px solid ${getGenreColor(genre) === 'black' ? paletteTheme.palette.black : paletteTheme.palette.white}`,
            }}
          >
            <Txt typo="subTitle_bold" color={getGenreColor(genre)}>
              {getGenreName(genre)}
            </Txt>
          </Flex>
        )}
        {title && (
          <Flex style={{ textAlign: 'start' }}>
            <Txt typo="point_title" color={getGenreColor(genre)}>
              {title}
            </Txt>
          </Flex>
        )}
      </Flex>
      <img src={getGenreImg(genre)} height="100%" alt={title} style={{ objectFit: 'cover' }} />
    </div>
  );
};
