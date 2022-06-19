import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  htmlType?: 'submit' | 'button' | 'reset';
  form?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  htmlType = 'button',
  form,
  onClick,
  disabled,
  className,
}) => {
  return (
    <Container type={htmlType} form={form} onClick={onClick} role="submit" disabled={disabled} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.yellow400};
  ${({ theme }) => theme.fonts.S16_Bold};
  color: ${({ theme }) => theme.colors.bithumbGray900};
  border-radius: 8px;

  &:disabled {
    background: ${({ theme }) => theme.colors.bithumbGray850};
    color: ${({ theme }) => theme.colors.bithumbGray700};
  }
`;

export default Button;
