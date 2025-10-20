import type React from 'react';

import {
  tableCellBorderStyle,
  tableCellNoBorderStyle,
  tableHCellBorderStyle,
  tableHCellNoBorderStyle,
  tableStyle,
} from '@/styles/base/table.css';
import { paletteTheme } from '@/styles/theme.css';

interface TableProps {
  head?: React.ReactElement<typeof TableHCell> | React.ReactElement<typeof TableHCell>[];
  body?: React.ReactElement<typeof TableRow> | React.ReactElement<typeof TableRow>[];
}

interface TableHCellProps {
  children: React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableRowProps {
  children: React.ReactElement<typeof TableCell> | React.ReactElement<typeof TableCell>[];
}

interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const TableHCell = ({ children, width, align = 'left' }: TableHCellProps) => {
  const isEmpty = !children || (typeof children === 'string' && children.trim() === '');

  return (
    <th
      className={isEmpty ? tableHCellNoBorderStyle : tableHCellBorderStyle}
      style={{
        height: '48px',
        textAlign: align,
        verticalAlign: 'middle',
        width,
        paddingLeft: '20px',
        borderBottom: `1px dashed ${paletteTheme.palette.black}`,
      }}
    >
      {children}
    </th>
  );
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

const TableCell = ({ children, align = 'left' }: TableCellProps) => {
  const isEmpty = !children || (typeof children === 'string' && children.trim() === '');

  return (
    <td
      className={isEmpty ? tableCellNoBorderStyle : tableCellBorderStyle}
      style={{
        height: '38px',
        textAlign: align,
        verticalAlign: 'middle',
        paddingLeft: '20px',
        borderBottom: `1px dashed ${paletteTheme.palette.black}`,
      }}
    >
      {children}
    </td>
  );
};

export const Table = ({ head, body }: TableProps) => {
  return (
    <table className={tableStyle}>
      {head && (
        <thead>
          <tr>{head}</tr>
        </thead>
      )}
      {body && <tbody>{body}</tbody>}
    </table>
  );
};

Table.Root = Table;
Table.HCell = TableHCell;
Table.Row = TableRow;
Table.Cell = TableCell;
