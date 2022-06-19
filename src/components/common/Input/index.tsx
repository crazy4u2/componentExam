import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import { FC, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends UseFormReturn {
  name: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  rules?: RegisterOptions;
  className?: string;
  children?: ReactNode;
}

const Input: FC<Props> = ({
  name,
  type = 'text',
  label,
  formState,
  placeholder = '입력하세요',
  register,
  setValue,
  disabled,
  rules,
  children,
  className,
}) => {
  const error = formState?.errors[name];

  return (
    <Container className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        <input
          id={name}
          type={type}
          aria-label={name}
          placeholder={placeholder}
          disabled={disabled}
          {...(register &&
            register(name, {
              ...rules,
            }))}
        />
        {children}
      </div>
      {error && error?.message !== '' && <p className="errorMsg">{error?.message}</p>}
    </Container>
  );
};

const Container = styled.div`
  label {
    display: inline-block;
    margin-bottom: 8px;
    ${({ theme }) => theme.fonts.S16_Regular};
    color: ${({ theme }) => theme.colors.bithumbGray150};
  }
  input {
    width: 100%;
    height: 52px;
    padding: 0 12px;
    border: ${({ theme }) => `1px solid ${theme.colors.bithumbGray700}`};
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.bithumbWhite};
    ${({ theme }) => theme.fonts.S16_Regular}
    &:focus {
      border-color: ${({ theme }) => theme.colors.bithumbGray400};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.bithumbGray600};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.bithumbGray700};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .errorMsg {
    margin-top: 12px;
    ${({ theme }) => theme.fonts.S12_Regular};
    color: ${({ theme }) => theme.colors.red400};
  }
`;

export default Input;
