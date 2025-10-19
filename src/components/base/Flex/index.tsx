import { forwardRef } from 'react';
import clsx from 'clsx';
import type React from 'react';

import { flexStyle } from '@/styles/base/flex.css';
import { sprinkles } from '@/styles/sprinkles.css';

interface FlexProps {
  children: React.ReactNode;
  direction?: Parameters<typeof sprinkles>[0]['flexDirection'];
  justifyContent?: Parameters<typeof sprinkles>[0]['justifyContent'];
  alignItems?: Parameters<typeof sprinkles>[0]['alignItems'];
  wrap?: Parameters<typeof sprinkles>[0]['flexWrap'];
  backgroundColor?: Parameters<typeof sprinkles>[0]['backgroundColor'];
  width?: string;
  height?: string;
  gap?: string;
  overflowX?: 'hidden' | 'scroll' | 'auto';
  overflowY?: 'hidden' | 'scroll' | 'auto';
  style?: React.CSSProperties;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      direction = 'row',
      justifyContent = 'flex-start',
      alignItems = 'flex-start',
      wrap = 'nowrap',
      backgroundColor,
      width,
      height,
      gap,
      overflowX = 'auto',
      overflowY = 'auto',
      style,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          flexStyle,
          sprinkles({
            display: 'flex',
            flexDirection: direction,
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexWrap: wrap,
            backgroundColor: backgroundColor,
            boxSizing: 'border-box',
          }),
        )}
        style={{ width, height, gap, overflowX, overflowY, minWidth: 0, ...style }}
      >
        {children}
      </div>
    );
  },
);
