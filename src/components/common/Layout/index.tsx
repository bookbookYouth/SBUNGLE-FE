import { Flex } from '../../base/Flex';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        width="402px"
        height="100%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="background"
      >
        <main>{children}</main>
      </Flex>
    </Flex>
  );
};
