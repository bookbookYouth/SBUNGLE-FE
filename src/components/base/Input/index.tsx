import clsx from 'clsx';

import { Flex } from '../Flex';
import { Txt } from '../Txt';

import { inputStyle } from '@/styles/common/input.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { typo } from '@/styles/typo.css';

interface InputProps {
  height: string;
  width?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: () => void;
}

export const Input = ({ height, width = '100%', label, placeholder = '', required = false, onChange }: InputProps) => {
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
        onChange={onChange}
        style={{
          height,
          width,
        }}
      />
    </Flex>
  );
};
