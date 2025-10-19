import { useNavigate } from 'react-router-dom';

import BackIcon from '@/assets/back.svg?react';
import CartIcon from '@/assets/cart.svg?react';
import DeleteIcon from '@/assets/delete.svg?react';
import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';
import { ROUTES } from '@/config/appConfig';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';
import logoIcon from '@/assets/logo.png';

interface HeaderProps {
  title?: string;
  isCart?: boolean;
  isBack?: boolean;
  isLogo?: boolean;
  isDelete?: boolean;
  iconColor?: Parameters<typeof sprinkles>[0]['backgroundColor'];
  handleBack?: () => void;
  handleClose?: () => void;
}

export const Header = ({
  title = '',
  isCart = false,
  isBack = false,
  isLogo = false,
  isDelete = false,
  iconColor = 'gray300',
  handleBack,
  handleClose,
}: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      height="52px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="background"
      style={{ maxWidth: '402px', position: 'sticky', top: 0, zIndex: 20 }}
    >
      {isBack ? (
        <BackIcon
          className={sprinkles({ cursor: 'pointer' })}
          width="44px"
          height="44px"
          style={{ color: paletteTheme.palette[iconColor], paddingLeft: '2px' }}
          onClick={() => (handleBack ? handleBack : history.back())}
        />
      ) : isLogo ? (
        <img
          src={logoIcon}
          alt="blur"
          height="40px"
          onClick={() => navigate(ROUTES.home)}
          className={sprinkles({ cursor: 'pointer' })}
          style={{ paddingLeft: '20px' }}
        />
      ) : (
        <div style={{ width: '44px', height: '44px' }} />
      )}
      <Txt typo="title">{title}</Txt>
      {isCart ? (
        <CartIcon
          className={sprinkles({ cursor: 'pointer' })}
          width="44px"
          height="44px"
          style={{ color: paletteTheme.palette[iconColor], paddingRight: '10px' }}
        />
      ) : isDelete ? (
        <DeleteIcon
          className={sprinkles({ cursor: 'pointer' })}
          width="44px"
          height="44px"
          style={{ paddingRight: '10px' }}
          onClick={handleClose}
        />
      ) : (
        <div style={{ width: '44px', height: '44px' }} />
      )}
    </Flex>
  );
};
