import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuItems = [
    { icon: homeIcon, clickedIcon: clickedHomeIcon, label: '홈', route: ROUTES.home.path },
    { icon: giftIcon, clickedIcon: clickedGiftIcon, label: '선물하기', route: ROUTES.gift.path },
    { icon: bookstoreIcon, clickedIcon: clickedBookstoreIcon, label: '독립서점', route: ROUTES.bookstore.path },
    { icon: wishIcon, clickedIcon: clickedWishIcon, alt: 'wish', label: '찜', route: ROUTES.wish.path },
    { icon: mypageIcon, clickedIcon: clickedMypageIcon, alt: 'mypage', label: '마이페이지', route: ROUTES.mypage.path },
  ];

  return (
    <div
      style={{
        borderTop: `1px solid ${paletteTheme.palette.gray100}`,
        height: '82px',
        width: '402px',
        position: 'fixed',
        bottom: 0,
        paddingTop: '4px',
      }}
    >
      <Flex height="100%" width="100%" gap="36px" justifyContent="center">
        {menuItems.map((item) => (
          <button
            key={item.route}
            onClick={() => navigate(item.route)}
            className={sprinkles({ cursor: 'pointer', backgroundColor: 'transparent' })}
            style={{ width: '44px', padding: '0', border: 'none' }}
          >
            <Flex direction="column" alignItems="center" justifyContent="flex-end" width="44px" height="44px">
              <img
                src={pathname === item.route ? item.clickedIcon : item.icon}
                alt={item.route}
                height="24px"
                width="24px"
              />
              <Txt typo="menu" color={pathname === item.route ? 'black' : 'gray200'}>
                {item.label}
              </Txt>
            </Flex>
          </button>
        ))}
      </Flex>
    </div>
  );
};
