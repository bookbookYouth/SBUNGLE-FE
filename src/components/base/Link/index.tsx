import { useNavigate } from 'react-router-dom';

import { sprinkles } from '@/styles/sprinkles.css';

interface LinkProps {
  children: React.ReactNode;
  url: string;
  isExternal?: boolean;
}

export const Link = ({ children, url, isExternal = false }: LinkProps) => {
  const naviagate = useNavigate();
  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  if (isExternal) {
    return (
      <button
        className={sprinkles({ cursor: 'pointer', backgroundColor: 'transparent' })}
        onClick={() => handleOpenNewTab(url)}
        style={{ border: 'none' }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={sprinkles({ cursor: 'pointer', backgroundColor: 'transparent' })}
        onClick={() => naviagate(url)}
        style={{ border: 'none' }}
      >
        {children}
      </button>
    );
  }
};
