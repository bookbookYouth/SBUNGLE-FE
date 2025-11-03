import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface BookStoryProps {
  name: string;
  src: string;
  onClick?: () => void;
}

export default function BookStory({ name, src, onClick }: BookStoryProps) {
  return (
    <Flex
      width="88px"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="8px"
      style={{ minWidth: '88px' }}
    >
      <img
        className={sprinkles({ cursor: 'pointer' })}
        src={src}
        alt={name}
        width={84}
        height={84}
        style={{ borderRadius: '50%', objectFit: 'cover', border: `1px solid ${paletteTheme.palette.black}` }}
        onClick={onClick}
      />
      <Txt typo="point_sm">{name}</Txt>
    </Flex>
  );
}
