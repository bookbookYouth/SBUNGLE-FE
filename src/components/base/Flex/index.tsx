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
}

export const Flex = ({
  children,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  wrap = 'nowrap',
  backgroundColor,
  width,
  height,
  gap,
}: FlexProps) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: wrap,
        backgroundColor: backgroundColor,
      })}
      style={{ width, height, gap }}
    >
      {children}
    </div>
  );
};
