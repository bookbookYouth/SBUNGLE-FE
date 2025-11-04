import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';

import { paletteTheme } from '@/styles/theme.css';

export const Layout = () => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => cancelAnimationFrame(id);
  }, [location.key]);

  return (
    <Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
      <Flex
        ref={scrollRef}
        width="100%"
        height="100%"
        overflowY="auto"
        direction="column"
        alignItems="stretch"
        style={{
          maxWidth: '402px',
          minHeight: '100vh',
          backgroundColor: paletteTheme.palette.background,
        }}
      >
        <div style={{ flex: '1 0 auto' }}>
          <Outlet context={{ scrollElement: scrollRef.current }} />
        </div>
      </Flex>
    </Flex>
  );
};
