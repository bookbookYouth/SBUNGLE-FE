import type React from 'react';

import {
  tableCellBorderStyle,
  tableCellNoBorderStyle,
  tableHCellBorderStyle,
  tableHCellNoBorderStyle,
  tableScrollableBodyStyle,
  tableStyle,
} from '@/styles/base/table.css';
import { paletteTheme } from '@/styles/theme.css';

interface TableProps {
  head?: React.ReactElement<typeof TableHCell> | React.ReactElement<typeof TableHCell>[];
  body?: React.ReactElement<typeof TableRow> | React.ReactElement<typeof TableRow>[];
  scrollableBody?: boolean;
}

interface TableHCellProps {
  theme?: 'dashed' | 'solid';
  children: React.ReactNode;
  colSpan?: number;
  width?: string;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

interface TableRowProps {
  children: React.ReactElement<typeof TableCell> | React.ReactElement<typeof TableCell>[];
  style?: React.CSSProperties;
}

interface TableCellProps {
  theme?: 'dashed' | 'solid';
  children: React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

const TableHCell = ({ theme = 'dashed', children, width, align = 'left', colSpan, style }: TableHCellProps) => {
  const isEmpty = !children || (typeof children === 'string' && children.trim() === '');

  return (
    <th
      colSpan={colSpan}
      className={isEmpty ? tableHCellNoBorderStyle : tableHCellBorderStyle}
      style={{
        height: '48px',
        textAlign: align,
        verticalAlign: 'middle',
        width,
        borderBottom:
          theme === 'dashed' ? `1px dashed ${paletteTheme.palette.black}` : `1px solid ${paletteTheme.palette.black}`,
        ...style,
      }}
    >
      {children}
    </th>
  );
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

const TableCell = ({ theme = 'dashed', children, width, align = 'left', style }: TableCellProps) => {
  const isEmpty = !children || (typeof children === 'string' && children.trim() === '');

  return (
    <td
      className={isEmpty ? tableCellNoBorderStyle : tableCellBorderStyle}
      style={{
        width,
        height: '38px',
        textAlign: align,
        verticalAlign: 'middle',
        borderBottom:
          theme === 'dashed' ? `1px dashed ${paletteTheme.palette.black}` : `1px solid ${paletteTheme.palette.black}`,
        ...style,
      }}
    >
      {children}
    </td>
  );
};

export const Table = ({ head, body, scrollableBody = false }: TableProps) => {
  return (
    <table className={tableStyle}>
      {head && (
        <thead>
          <tr>{head}</tr>
        </thead>
      )}
      {body && <tbody className={scrollableBody ? tableScrollableBodyStyle : undefined}>{body}</tbody>}
    </table>
  );
};

Table.Root = Table;
Table.HCell = TableHCell;
Table.Row = TableRow;
Table.Cell = TableCell;
