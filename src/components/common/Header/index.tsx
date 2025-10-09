import BackIcon from '@/assets/back.svg?react';
import CartIcon from '@/assets/cart.svg?react';
import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface HeaderProps {
  title?: string;
  isRight?: boolean;
  isLeft?: boolean;
  iconColor?: Parameters<typeof sprinkles>[0]['backgroundColor'];
}

export const Header = ({ title = '', isRight = false, isLeft = false, iconColor = 'gray300' }: HeaderProps) => {
  return (
    <div style={{ height: '52px', width: '100%', padding: '0 2px' }}>
      <Flex height="100%" width="100%" justifyContent="space-between" alignItems="center">
        {isLeft ? (
          <BackIcon
            className={sprinkles({ cursor: 'pointer' })}
            width="44px"
            height="44px"
            style={{ color: paletteTheme.palette[iconColor] }}
          />
        ) : (
          <div style={{ width: '44px', height: '44px' }} />
        )}
        <Txt typo="title">{title}</Txt>
        {isRight ? (
          <CartIcon
            className={sprinkles({ cursor: 'pointer' })}
            width="44px"
            height="44px"
            style={{ color: paletteTheme.palette[iconColor] }}
          />
        ) : (
          <div style={{ width: '44px', height: '44px' }} />
        )}
      </Flex>
    </div>
  );
};
