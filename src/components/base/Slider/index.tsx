import { Flex } from '../Flex';

interface SliderProps {
  children: React.ReactNode;
}

export const Slider = ({ children }: SliderProps) => {
  return (
    <Flex
      gap="12px"
      width="100%"
      height="fit-content"
      overflowX="auto"
      overflowY="hidden"
      style={{ minWidth: 0, flex: '1 1 0%' }}
    >
      {children}
    </Flex>
  );
};
