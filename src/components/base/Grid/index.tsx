import React from 'react';

import { Flex } from '@/components/base/Flex';

import { sprinkles } from '@/styles/sprinkles.css';

interface GridProps {
  children: React.ReactElement<typeof GridCol> | React.ReactElement<typeof GridCol>[];
  colGap?: string;
  rowGap?: string;
  colCount?: number;
}

interface GridColProps {
  children: React.ReactNode;
  span?: number; // 차지할 칸
}

const GridCol = ({ children, span = 1 }: GridColProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      overflowX="hidden"
      overflowY="hidden"
      style={{
        gridColumn: `span ${span}`,
      }}
    >
      {children}
    </Flex>
  );
};

export const Grid = ({ children, colGap = '12px', rowGap = '12px', colCount = 2 }: GridProps) => {
  return (
    <div
      className={sprinkles({ display: 'grid' })}
      style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)`, width: '100%', rowGap: rowGap, columnGap: colGap }}
    >
      {children}
    </div>
  );
};

Grid.Col = GridCol;
