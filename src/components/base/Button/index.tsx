import clsx from 'clsx';

import { buttonStyle } from '@/styles/base/button.css';
import { sprinkles } from '@/styles/sprinkles.css';

export type colorType = 'orange' | 'gray' | 'black';
export type themeType = 'fill' | 'clear';

interface ButtonProps {
  color?: colorType;
  theme?: themeType;
  children: React.ReactNode;
  width: string;
  height: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const Button = ({
  color = 'black',
  theme = 'clear',
  children,
  width,
  height,
  ariaLabel,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
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
      style={{ width, height }}
    >
      {children}
    </button>
  );
};
