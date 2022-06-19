import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Layout, Text } from '~components/common';

interface Props {
  title: string;
  description?: string;
}

const AuthTemplate: FC<PropsWithChildren<Props>> = ({ title, description, children }) => {
  return (
    <Layout address="a">
      <Container>
        <div className="findId-title">
          <Text font="S28_Bold">{title}</Text>
          {description && (
            <Text color="bithumbGray450" className="findId-description">
              {description.split('\\n').map((item) => (
                <span key={item}>
                  {item}
                  <br />
                </span>
              ))}
            </Text>
          )}
        </div>
        {children}
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  width: 335px;
  margin: 100px auto 60px;
  > .findId-title {
    margin-bottom: 40px;
    > .findId-description {
      margin-top: 12px;
    }
  }
`;

export default AuthTemplate;
