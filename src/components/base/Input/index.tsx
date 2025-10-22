import clsx from 'clsx';
import type React from 'react';

import { Flex } from '@/components/base/Flex';
import { Txt } from '@/components/base/Txt';

import { inputStyle } from '@/styles/base/input.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { typo } from '@/styles/typo.css';

interface InputProps {
  height: string;
  width?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  inputValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  height,
  width = '100%',
  label,
  placeholder = '',
  required = false,
  inputValue,
  onChange,
}: InputProps) => {
  return (
    <Flex width="100%" alignItems="flex-start" justifyContent="space-between">
      {label && (
        <Flex gap="1px">
          <Txt typo="subTitle_bold">{label}</Txt>
          {required && (
            <div
              className={sprinkles({ backgroundColor: 'primary' })}
              style={{ width: '5px', aspectRatio: '1/1', borderRadius: '50%' }}
            />
          )}
        </Flex>
      )}
      <input
        type="text"
        aria-label={label ?? 'input'}
        className={clsx(inputStyle, typo['content_sm'], sprinkles({ color: 'black' }))}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        style={{
          height,
          width,
        }}
      />
    </Flex>
  );
};
