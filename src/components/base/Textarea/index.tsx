import clsx from 'clsx';

import { Flex } from '../Flex';
import { Txt } from '../Txt';

import { textareaStyle } from '@/styles/common/input.css';
import { sprinkles } from '@/styles/sprinkles.css';

interface TextareaProps {
  height: string;
  width?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  handleChange?: () => void;
}

export const Textarea = ({
  height,
  width = '100%',
  label,
  placeholder = '',
  required = false,
  handleChange,
}: TextareaProps) => {
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
      <textarea
        aria-label={label ?? 'textarea'}
        className={clsx(textareaStyle, sprinkles({ color: 'black', fontFamily: 'body', fontSize: 'sm' }))}
        placeholder={placeholder}
        onChange={handleChange}
        style={{
          height,
          width,
        }}
      />
    </Flex>
  );
};
