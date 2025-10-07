import clsx from 'clsx';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';
import { typo } from '@/styles/typo.css';

interface BadgeProps {
  children: React.ReactNode;
  color?: Parameters<typeof sprinkles>[0]['color'];
}

export const Badge = ({ children, color = 'primary' }: BadgeProps) => {
  return (
    <div
      className={clsx(
        typo['content_sm'],
        sprinkles({ display: 'inline-block', backgroundColor: 'white', color: color }),
      )}
      style={{
        width: 'fit-content',
        border: `1px solid ${paletteTheme.palette[color]}`,
        borderRadius: '100px',
        padding: '2px 12px',
      }}
    >
      {children}
    </div>
  );
};
