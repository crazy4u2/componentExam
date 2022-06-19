import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Icon, Text } from '~components/common';

interface Props {
  check?: boolean;
}

const CheckValiText: FC<PropsWithChildren<Props>> = ({ check, children }) => {
  return (
    <Container>
      <Icon name="confirm" color={check ? 'yellow400' : 'bithumbGray700'} />
      <Text font="S12_Bold" color={check ? 'yellow400' : 'bithumbGray700'}>
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: 4px;
  }
  > svg {
    width: 12px;
    height: 7px;
  }
`;

export default CheckValiText;
