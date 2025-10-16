import { NavLink, useLocation } from 'react-router-dom';

import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';
import { ROUTES } from '@/config/appConfig';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';
import bookstoreIcon from '@/assets/bookstore.svg';
import clickedBookstoreIcon from '@/assets/clickedBookstore.svg';
import clickedGiftIcon from '@/assets/clickedGift.svg';
import clickedHomeIcon from '@/assets/clickedHome.svg';
import clickedMypageIcon from '@/assets/clickedMypage.svg';
import clickedWishIcon from '@/assets/clickedWish.svg';
import giftIcon from '@/assets/gift.svg';
import homeIcon from '@/assets/home.svg';
import mypageIcon from '@/assets/mypage.svg';
import wishIcon from '@/assets/wish.svg';

export const Footer = () => {
  const { pathname } = useLocation();

  const HOME_ACTIVE_PATH: string[] = [ROUTES.home, ROUTES.bookList];
  const MENU_ITEMS = [
    {
      icon: homeIcon,
      clickedIcon: clickedHomeIcon,
      label: '홈',
      path: ROUTES.home,
      exact: true,
      activeCondition: (pathname: string) => HOME_ACTIVE_PATH.includes(pathname),
    },
    { icon: giftIcon, clickedIcon: clickedGiftIcon, label: '선물하기', path: ROUTES.gift },
    { icon: bookstoreIcon, clickedIcon: clickedBookstoreIcon, label: '독립서점', path: ROUTES.bookstore },
    { icon: wishIcon, clickedIcon: clickedWishIcon, alt: 'wish', label: '찜', path: ROUTES.wish },
    { icon: mypageIcon, clickedIcon: clickedMypageIcon, alt: 'mypage', label: '마이페이지', path: ROUTES.mypage },
  ];

  return (
    <div
      className={sprinkles({ backgroundColor: 'background' })}
      style={{
        borderTop: `1px solid ${paletteTheme.palette.gray100}`,
        height: '48px',
        width: '402px',
        position: 'fixed',
        bottom: 0,
        paddingTop: '4px',
      }}
    >
      <Flex height="100%" width="100%" gap="36px" justifyContent="center" alignItems="center">
        {MENU_ITEMS.map(({ icon, clickedIcon, label, path, exact, activeCondition }) => (
          <NavLink
            key={path}
            to={path}
            end={!!exact}
            className={sprinkles({ backgroundColor: 'transparent', cursor: 'pointer' })}
            style={{ width: '44px', padding: 0, border: 'none', textDecoration: 'none' }}
          >
            {({ isActive }) => {
              const extraActive = activeCondition ? activeCondition(pathname) : false;
              const active = isActive || extraActive;
              return (
                <Flex direction="column" alignItems="center" justifyContent="center" width="44px" height="44px">
                  <img src={active ? clickedIcon : icon} alt={path} height="24px" width="24px" />
                  <Txt typo="menu" color={active ? 'black' : 'gray200'}>
                    {label}
                  </Txt>
                </Flex>
              );
            }}
          </NavLink>
        ))}
      </Flex>
    </div>
  );
};
