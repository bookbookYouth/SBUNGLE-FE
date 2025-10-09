import clsx from 'clsx';

import { buttonStyle } from '@/styles/base/button.css';
import { sprinkles } from '@/styles/sprinkles.css';

export type colorType = 'orange' | 'gray' | 'black';
export type themeType = 'fill' | 'clear';

interface ButtonProps {
  type?: 'button' | 'submit';
  color?: colorType;
  theme?: themeType;
  children: React.ReactNode;
  width: string;
  height: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
}
export const Button = ({
  type = 'button',
  color = 'black',
  theme = 'clear',
  children,
  width,
  height,
  ariaLabel,
  disabled = false,
  onClick,
  active = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        buttonStyle,
        sprinkles({
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'inline-block',
          alignItems: 'center',
          justifyContent: 'center',
        }),
      )}
      aria-label={ariaLabel ?? 'button'}
      disabled={disabled}
      onClick={onClick}
      data-color={color}
      data-theme={theme}
      data-active={active}
      style={{ width, height }}
    >
      {children}
    </button>
  );
};
