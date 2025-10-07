import { clsx } from 'clsx';
import type { CSSProperties } from 'react';

import { iconButtonStyle } from '@/styles/base/button.css';
import { sprinkles } from '@/styles/sprinkles.css';

interface IconButtonProps {
  width?: string;
  height?: string;
  src: string;
  alt: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
  activeStyle?: CSSProperties;
}

export const IconButton = ({
  width = 'auto',
  height = 'auto',
  src,
  alt,
  ariaLabel,
  disabled = false,
  onClick,
  active = false,
  activeStyle,
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        iconButtonStyle,
        sprinkles({
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'inline-block',
          alignItems: 'center',
          justifyContent: 'center',
        }),
      )}
      aria-label={ariaLabel ?? alt}
      disabled={disabled}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={sprinkles({ display: 'block' })}
        style={active ? activeStyle : undefined}
      />
    </button>
  );
};
