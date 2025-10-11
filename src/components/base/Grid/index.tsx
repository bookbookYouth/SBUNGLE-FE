import React from 'react';

import { Flex } from '../Flex';

import { sprinkles } from '@/styles/sprinkles.css';

interface GridProps {
  children: React.ReactElement<typeof GridCol> | React.ReactElement<typeof GridCol>[];
  gap?: string;
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
      style={{
        gridColumn: `span ${span}`,
      }}
    >
      {children}
    </Flex>
  );
};

export const Grid = ({ children, gap = '20px', colCount = 2 }: GridProps) => {
  return (
    <div
      className={sprinkles({ display: 'grid' })}
      style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)`, width: '100%', gap }}
    >
      {children}
    </div>
  );
};

Grid.Col = GridCol;
