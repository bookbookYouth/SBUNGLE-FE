import { useNavigate } from 'react-router-dom';

import BackIcon from '@/assets/back.svg?react';
import CartIcon from '@/assets/cart.svg?react';
import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';
import logoIcon from '@/assets/logo.png';

interface HeaderProps {
  title?: string;
  isRight?: boolean;
  isLeft?: boolean;
  isLogo?: boolean;
  iconColor?: Parameters<typeof sprinkles>[0]['backgroundColor'];
  handleBack?: () => void;
}

export const Header = ({
  title = '',
  isRight = false,
  isLeft = false,
  isLogo = false,
  iconColor = 'gray300',
  handleBack,
}: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      height="52px"
      width="402px"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="background"
      style={{ position: 'sticky', top: 0, zIndex: 20 }}
    >
      {isLeft ? (
        <BackIcon
          className={sprinkles({ cursor: 'pointer' })}
          width="44px"
          height="44px"
          style={{ color: paletteTheme.palette[iconColor], paddingLeft: '2px' }}
          onClick={handleBack ? handleBack : history.back}
        />
      ) : isLogo ? (
        <img
          src={logoIcon}
          alt="blur"
          height="40px"
          onClick={() => navigate('/')}
          className={sprinkles({ cursor: 'pointer' })}
          style={{ paddingLeft: '20px' }}
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
          style={{ color: paletteTheme.palette[iconColor], paddingRight: '10px' }}
        />
      ) : (
        <div style={{ width: '44px', height: '44px' }} />
      )}
    </Flex>
  );
};
