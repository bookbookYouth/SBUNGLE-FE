import { sprinkles } from '@/styles/sprinkles.css';

interface HrProps {
  height?: string;
  backgroundColor?: Parameters<typeof sprinkles>[0]['backgroundColor'];
}

export const Hr = ({ height = '1px', backgroundColor = 'black' }: HrProps) => {
  return <div className={sprinkles({ backgroundColor })} style={{ width: '100%', height }} />;
};
