import { Flex } from '../Flex';
import { Hr } from '../Hr';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface CardProps {
  theme?: 'small' | 'large';
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

export const Card = ({ theme = 'large', top, bottom }: CardProps) => {
  return (
    <div
      className={sprinkles({ cursor: 'pointer' })}
      style={{
        border: `1px solid ${paletteTheme.palette.black}`,
        minWidth: theme === 'large' ? '180px' : '152px',
        height: '268px',
        overflow: 'hidden',
      }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
        width="100%"
        overflowX="hidden"
        overflowY="hidden"
      >
        {top}
      </Flex>
      <Hr height="1px" />
      <Flex width="100%" height="68px" alignItems="center" style={{ padding: theme === 'small' ? '0 8px' : '0 12px' }}>
        {bottom}
      </Flex>
    </div>
  );
};
