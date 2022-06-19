import { FC, PropsWithChildren } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { theme } from '~styles/theme';

interface Props {
  as?: React.ElementType;
  font?: keyof typeof theme.fonts;
  color?: keyof typeof theme.colors;
  className?: string;
}

const Text: FC<PropsWithChildren<Props>> = ({
  children,
  as = 'p',
  font = 'S14_Regular',
  color = 'bithumbGray150',
  className,
}) => {
  return (
    <Container as={as} font={font} color={color} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.p<{ font: keyof typeof theme.fonts; color: keyof typeof theme.colors }>`
  ${({ theme, font }) => theme.fonts[font]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

export default Text;
