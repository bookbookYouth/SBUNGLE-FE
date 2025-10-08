import clsx from 'clsx';

import { sprinkles } from '@/styles/sprinkles.css';
import { typo as typoStyle } from '@/styles/typo.css';

interface TxtProps {
  children: React.ReactNode;
  typo?: keyof typeof typoStyle;
  color?: Parameters<typeof sprinkles>[0]['color'];
}

export const Txt = ({ children, typo = 'content_sm', color }: TxtProps) => {
  return <div className={clsx(typoStyle[typo], sprinkles({ color }))}>{children}</div>;
};
