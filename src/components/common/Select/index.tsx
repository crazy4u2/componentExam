import { FC } from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import Icon from '../Icon';

interface Props extends Partial<Pick<UseFormReturn, 'register'>> {
  options: {
    label: React.ReactNode;
    value: string | number;
  }[];
  defaultValue?: string | number;
  disabled?: boolean;
  underline?: boolean;
  name: string;
  rules?: RegisterOptions;
}

const Select: FC<Props> = ({ name, register, defaultValue = 'placeholder', options, disabled, rules }) => {
  return (
    <Container>
      <select disabled={disabled} {...(register && register(name, rules))} defaultValue={defaultValue}>
        <option value="placeholder" disabled>
          선택해주세요
        </option>
        {options &&
          options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>
      <Icon name="arrowDown" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 3.25rem;
  box-sizing: border-box;

  > select {
    &::-ms-expand {
      display: none;
    }
    height: 52px;
    padding: 0 12px;
    border: ${({ theme }) => `1px solid ${theme.colors.bithumbGray700}`};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.bithumbWhite};
    ${({ theme }) => theme.fonts.S16_Regular}
    background: transparent;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: inherit;
    height: inherit;
    background: transparent;
    border: 0 none;
    outline: 0 none;
    padding: 16px;
    position: relative;
    z-index: 3; // select가 위로 올라와야 함
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.colors.bithumbGray700};
    &:focus {
      border-color: ${({ theme }) => theme.colors.bithumbWhite};
      color: ${({ theme }) => theme.colors.bithumbWhite};
    }
    > option[value=''][disabled] {
      display: none;
    }
  }
  > svg {
    position: absolute;
    right: 1rem;
    top: calc(50% - 4px);
    transition: 0.2s; // 부드럽게 회전
  }
`;

export default Select;
