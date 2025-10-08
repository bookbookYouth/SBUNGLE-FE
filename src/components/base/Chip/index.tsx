import clsx from 'clsx';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';
import { typo } from '@/styles/typo.css';

interface ChipProps {
  children: React.ReactNode;
  color?: Parameters<typeof sprinkles>[0]['color'];
  borderColor?: Parameters<typeof sprinkles>[0]['color'];
}

export const Chip = ({ children, color = 'gray400', borderColor = 'gray200' }: ChipProps) => {
  return (
    <div
      className={clsx(
        typo['content_sm'],
        sprinkles({ display: 'inline-block', color: color, backgroundColor: 'transparent' }),
      )}
      style={{
        width: 'fit-content',
        border: `1px solid ${paletteTheme.palette[borderColor]}`,
        borderRadius: '20px',
        padding: '8px 16px',
      }}
    >
      {children}
    </div>
  );
};
