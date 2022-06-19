import { FC, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import useToggle from 'src/hooks/useToggle';
import styled from 'styled-components';
import { Icon, Text } from '~components/common';
import Checkbox from '~components/common/Checkbox';

export type AgreeInputForm = {
  agreeAll?: string;
  agree?: string[];
};

interface Props extends UseFormReturn<AgreeInputForm> {
  onAgreeCheck: (agree: string[]) => void;
}

const AgreeInput: FC<Props> = ({ ...props }) => {
  const { serviceToggle, onServiceToggle, moblieToggle, onMoblieToggle } = useAgreeInput({ ...props });

  return (
    <Container>
      <div className="agree-all">
        <Checkbox name="agreeAll" value="all" {...props}>
          모든 약관에 동의합니다.
        </Checkbox>
      </div>
      <div className="tab">
        <div>
          <Checkbox name="agree" value="agree1" {...props}>
            서비스 이용약관{' '}
            <Text color="yellow400" font="S16_Regular" as="span">
              (필수)
            </Text>
          </Checkbox>
          <ArrowButton toggle={serviceToggle} type="button" onClick={onServiceToggle}>
            <Icon name="arrowDown" />
          </ArrowButton>
        </div>
        {serviceToggle && (
          <ul>
            <li>
              <button>이용약관</button>
            </li>
            <li>
              <button>개인정보처리방침</button>
            </li>
            <li>
              <button>청소년 보호청책</button>
            </li>
            <li>
              <button>전자금융거래약관</button>
            </li>
          </ul>
        )}
      </div>
      <div className="tab">
        <div>
          <Checkbox name="agree" value="agree2" {...props}>
            휴대폰 본인인증 서비스{' '}
            <Text color="yellow400" font="S16_Regular" as="span">
              (필수)
            </Text>
          </Checkbox>
          <ArrowButton toggle={moblieToggle} type="button" onClick={onMoblieToggle}>
            <Icon name="arrowDown" />
          </ArrowButton>
        </div>
        {moblieToggle && (
          <ul>
            <li>
              <button>이용약관</button>
            </li>
            <li>
              <button>개인정보처리방침</button>
            </li>
            <li>
              <button>청소년 보호청책</button>
            </li>
            <li>
              <button>전자금융거래약관</button>
            </li>
          </ul>
        )}
      </div>
      <div className="tab">
        <Checkbox name="agree" value="agree3" {...props}>
          이벤트 정보 수신 (선택)
        </Checkbox>
      </div>
    </Container>
  );
};

// hooks
function useAgreeInput({ ...props }: Props) {
  const { watch, setValue, onAgreeCheck, reset } = props;
  const { agreeAll, agree } = watch();
  const { toggle: serviceToggle, onToggle: onServiceToggle } = useToggle();
  const { toggle: moblieToggle, onToggle: onMoblieToggle } = useToggle();

  useEffect(() => {
    if (agree && agree.length !== 3) setValue('agreeAll', undefined);
    else setValue('agreeAll', 'agreeAll');
  }, [agree, setValue]);

  useEffect(() => {
    if (agreeAll) {
      setValue('agree', ['agree1', 'agree2', 'agree3']);
    }
  }, [agreeAll, setValue]);

  useEffect(() => {
    if (agree) onAgreeCheck(agree);
  }, [agree]);

  useEffect(() => {
    setValue('agreeAll', undefined);
    setValue('agree', undefined);
  }, []);

  return { serviceToggle, onServiceToggle, moblieToggle, onMoblieToggle };
}

// styles
const Container = styled.div`
  margin-bottom: 40px;
  .agree-all {
    padding: 40px 0 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bithumbGray800};
    span {
      font-weight: 700 !important;
    }
  }
  > div.tab {
    margin-top: 16px;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > ul {
      margin-top: 12px;
      border-top: 1px solid ${({ theme }) => theme.colors.bithumbGray800};
      > li {
        margin-top: 12px;
        padding-left: 8px;
        color: ${({ theme }) => theme.colors.bithumbGray150};
        list-style: disc;
        list-style-position: inside;
        > button {
          position: relative;
          left: -4px;
          color: ${({ theme }) => theme.colors.bithumbGray150};
          ${({ theme }) => theme.fonts.S14_Regular};
          text-decoration: underline;
        }
      }
    }
  }
`;

const ArrowButton = styled.button<{ toggle: boolean }>`
  svg {
    transition: 0.3s;
    transform: ${({ toggle }) => (toggle ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export default AgreeInput;
