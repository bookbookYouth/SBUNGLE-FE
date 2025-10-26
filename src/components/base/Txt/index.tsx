import clsx from 'clsx';
import type React from 'react';

import { sprinkles } from '@/styles/sprinkles.css';
import { typo as typoStyle } from '@/styles/typo.css';

interface TxtProps {
  children: React.ReactNode;
  typo?: keyof typeof typoStyle;
  color?: Parameters<typeof sprinkles>[0]['color'];
  underline?: boolean;
  style?: React.CSSProperties;
}

export const Txt = ({ children, typo = 'content_sm', color, underline = false, style }: TxtProps) => {
  return (
    <span
      className={clsx(typoStyle[typo], sprinkles({ color }))}
      style={{
        textDecoration: underline ? 'underline' : 'none',
        textUnderlinePosition: 'from-font',
        wordBreak: 'break-word',
        ...style,
      }}
    >
      {children}
    </span>
  );
};
