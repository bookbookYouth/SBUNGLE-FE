import { Flex } from '../Flex';

interface SliderProps {
  children: React.ReactNode;
}

export const Slider = ({ children }: SliderProps) => {
  return (
    <Flex gap="12px" width="100%" overflowX="scroll" overflowY="hidden">
      {children}
    </Flex>
  );
};
