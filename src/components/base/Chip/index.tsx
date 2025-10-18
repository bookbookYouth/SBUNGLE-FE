import clsx from 'clsx';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';
import { typo } from '@/styles/typo.css';

interface ChipProps {
  children: React.ReactNode;
  theme?: 'orange' | 'gray';
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Chip = ({ children, theme = 'gray', onClick, style }: ChipProps) => {
  return (
    <button
      className={clsx(
        typo['content_sm'],
        sprinkles({
          display: 'inline-block',
          color: theme === 'gray' ? 'gray400' : 'white',
          backgroundColor: theme === 'gray' ? 'transparent' : 'primary',
          boxSizing: 'border-box',
        }),
      )}
      style={{
        width: 'fit-content',
        border: `1px solid ${theme === 'gray' ? paletteTheme.palette.gray200 : paletteTheme.palette.primary}`,
        borderRadius: '20px',
        padding: '7px 16px',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
