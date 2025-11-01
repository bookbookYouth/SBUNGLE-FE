import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';

interface BookStoryProps {
  name: string;
  src: string;
}

export default function BookStory({ name, src }: BookStoryProps) {
  return (
    <Flex
      width="88px"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="8px"
      style={{ minWidth: '88px' }}
    >
      <img src={src} alt={name} width={84} height={84} style={{ borderRadius: '50%', objectFit: 'cover' }} />
      <Txt typo="point_sm">{name}</Txt>
    </Flex>
  );
}
