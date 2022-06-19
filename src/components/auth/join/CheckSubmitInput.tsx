import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Icon, Input, Text } from '~components/common';

interface Props extends UseFormReturn<any> {
  checkTrue: boolean;
  checkFalse?: boolean;
  name: string;
  label: string;
  onClick: () => void;
}

const CheckSubmitInput: FC<Props> = ({ label, name, checkTrue, checkFalse, onClick, ...props }) => {
  return (
    <Container>
      <Text font="S16_Regular" className="label">
        {label}
      </Text>
      <div>
        <div className="input-box">
          <Input name={name} placeholder={`${label} 입력`} disabled={checkTrue} {...props} />
          {checkTrue && (
            <p className="check">
              <Icon name="confirm" />
            </p>
          )}
        </div>
        <Button onClick={onClick}>중복확인</Button>
      </div>
      {checkTrue && (
        <Text className="check check-true" color="blue400">
          {`😊 사용 가능한 ${label}입니다.`}
        </Text>
      )}
      {checkFalse && (
        <Text className="check check-false" color="red400">
          {`😰 이미 등록된 ${label}입니다.`}
        </Text>
      )}
    </Container>
  );
};

// styled
const Container = styled.div`
  > .label {
    margin-bottom: 8px;
  }
  > div {
    display: flex;
    > div {
      flex: 1;
    }
    .input-box {
      position: relative;
    }
    .check {
      position: absolute;
      top: 18px;
      right: 12px;
    }
    > button {
      width: 100px;
      margin-left: 8px;
    }
  }
  > .check {
    margin-top: 12px;
  }
`;

export default CheckSubmitInput;
