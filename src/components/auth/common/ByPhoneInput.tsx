import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Input, Select } from '~components/common';
import { VALIDATION_SCHEMA } from '~constants';
import _ from 'lodash';

const selectData = [
  { label: 'SKT', value: 1 },
  { label: 'KT', value: 2 },
  { label: 'LG', value: 3 },
  { label: 'SKT알뜰폰', value: 4 },
  { label: 'KT알뜰폰', value: 5 },
  { label: 'LGU+알뜰폰', value: 6 },
];

export type ByPhoneInputForm = {
  jumin?: string;
  juminSecond?: number;
  mobile?: string;
  mobileCode?: string;
  name?: string;
};

interface Props extends UseFormReturn<ByPhoneInputForm> {
  minutes: string | number;
  seconds: string | number;
  isCertificationSuccess: boolean;
}

const ByPhoneInput: FC<Props> = ({ ...props }) => {
  const { disableMobileSubmit, submitText } = useByPhoneInput({ ...props });

  return (
    <Container>
      <Input name="name" label="이름" placeholder="이름 입력" {...props} />
      <div className="jumin-wrapper">
        <label>생년월일</label>
        <div>
          <Input name="jumin" type="number" placeholder="생년월일(6자리)" rules={VALIDATION_SCHEMA.jumin} {...props} />
          <p className="jumin-dash">-</p>
          <Input
            name="juminSecond"
            type="number"
            className="jumin-second-input"
            rules={VALIDATION_SCHEMA.juminSecond}
            {...props}
          />
          <p className="jumin-secret">******</p>
        </div>
      </div>

      <div className="certification-wrapper">
        <label>휴대폰 번호</label>
        <Select name="mobileCode" options={selectData} {...props} />
        <div className="submit-wrapper">
          <Input name="mobile" type="number" placeholder="휴대폰 번호" rules={VALIDATION_SCHEMA.phone} {...props} />
          <Button htmlType="submit" disabled={disableMobileSubmit}>
            {submitText}
          </Button>
        </div>
      </div>
    </Container>
  );
};

// hooks
function useByPhoneInput({ ...props }: Props) {
  const {
    watch,
    formState: { errors },
    minutes,
    seconds,
    isCertificationSuccess,
  } = props;
  const { mobile, mobileCode, jumin, juminSecond, name } = watch();
  const disableMobileSubmit =
    mobile &&
    mobileCode !== 'placeholder' &&
    jumin &&
    juminSecond &&
    name &&
    _.isEmpty(errors.mobile) &&
    _.isEmpty(errors.jumin) &&
    _.isEmpty(errors.juminSecond) &&
    _.isEmpty(errors.name) &&
    (minutes < '02' || (minutes === '02' && seconds < '00'))
      ? false
      : true;

  const submitText = !isCertificationSuccess && minutes === '00' && seconds === '00' ? '번호요청' : '재요청';

  return { disableMobileSubmit, submitText };
}

// styles
const Container = styled.div`
  > div {
    margin-bottom: 16px;
  }
  label {
    display: inline-block;
    margin-bottom: 8px;
    ${({ theme }) => theme.fonts.S16_Regular};
    color: ${({ theme }) => theme.colors.bithumbGray150};
  }
  .jumin-wrapper {
    > div {
      display: flex;
      align-items: center;
      > p {
        color: ${({ theme }) => theme.colors.bithumbGray400};
      }
      > .jumin-second-input {
        width: 40px;
        input::placeholder {
          color: transparent;
        }
      }
      > .jumin-dash {
        margin: 0 16px;
        font-size: 24px;
      }
      > .jumin-secret {
        font-size: 16px;
        margin: 6px 0 0 16px;
        letter-spacing: 7px;
      }
    }
  }
  .submit-wrapper {
    display: flex;
    > div {
      flex: 1;
    }
    > button {
      width: 100px;
      margin-left: 8px;
    }
  }
  .certification-wrapper {
    margin-top: 16px;
    > div {
      margin-bottom: 16px;
    }
  }
`;

export default ByPhoneInput;
