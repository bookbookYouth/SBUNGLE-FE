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
      style={{
        border: `1px solid ${paletteTheme.palette.black}`,
        width: theme === 'large' ? '180px' : '152px',
        height: '268px',
      }}
    >
      <Flex direction="column">
        <div
          className={sprinkles({ alignItems: 'center', justifyContent: 'center' })}
          style={{ height: '200px', width: '100%' }}
        >
          {top}
        </div>
        <Hr height="1px" />
        <div
          className={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}
          style={{ width: '100%', height: '68px' }}
        >
          {bottom}
        </div>
      </Flex>
    </div>
  );
};
