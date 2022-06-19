export const EMAIL_REG_EXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const PASSWORD_REG_EXP = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/;
export const PHONE_REG_EXP = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
export const NUMBER_REG_EXP = /[0-9]/;
export const STRING_REG_EXP = /[a-zA-Z]/;
export const SPECIAL_REG_EXP = /[$`~!@$!%*#^?&\\(\\)\-_=+]/;
export const LENGTH_REG_EXP = /.{8,12}$/;

// 오류 패턴 스키마
export const VALIDATION_SCHEMA = {
  email: {
    required: true,
    pattern: {
      value: EMAIL_REG_EXP,
      message: '올바른 이메일 형식을 입력해주세요',
    },
  },
  password: {
    required: true,
    pattern: PASSWORD_REG_EXP,
  },
  phone: {
    required: true,
    pattern: {
      value: PHONE_REG_EXP,
      message: '올바른 휴대폰 번호를 입력해주세요',
    },
  },
  jumin: {
    required: true,
    maxLength: {
      value: 6,
      message: '6자리 입니다',
    },
  },
  juminSecond: {
    required: true,
    maxLength: {
      value: 1,
      message: '6자리 입니다',
    },
  },
  certificationNumber: {
    minLength: 6,
    maxLength: 6,
  },
};

export default VALIDATION_SCHEMA;
