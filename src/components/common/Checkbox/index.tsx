import { FC, PropsWithChildren } from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import Icon from '../Icon';

interface Props extends UseFormReturn {
  checked?: boolean;
  disabled?: boolean;
  name: string;
  value: any;
  rules?: RegisterOptions;
  className?: string;
}

const Checkbox: FC<PropsWithChildren<Props>> = ({
  name,
  register,
  value,
  children,
  checked,
  disabled,
  className,
  rules,
}) => {
  return (
    <Label>
      <input
        id={value}
        value={value}
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        className={className}
        {...(register &&
          register(name, {
            ...rules,
          }))}
      />
      <p>
        <Icon name="checkboxOn" className="checked" />
        <Icon name="checkboxOff" className="unchecked" />
      </p>
      <span>{children}</span>
    </Label>
  );
};

const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    z-index: 11;
    width: 24px;
    height: 20px;
    + p {
      position: absolute;
      cursor: pointer;
      > svg {
        position: absolute;
        transition: opacity 0.2s;
      }
      .checked {
        opacity: 0;
      }
      .unchecked {
        opacity: 1;
      }
    }
    ~ span {
      padding-left: 28px;
      ${({ theme }) => theme.fonts.S16_Regular}
      color: ${({ theme }) => theme.colors.bithumbGray450};
      line-height: 24px;
    }
    :checked,
    :focus {
      outline: none !important;
    }
    :checked {
      + p {
        .checked {
          opacity: 1;
        }
        .unchecked {
          opacity: 0;
        }
      }
      ~ span {
        color: ${({ theme }) => theme.colors.yellow400};
      }
    }
  }
`;

export default Checkbox;
