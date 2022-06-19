import styled from 'styled-components';

export const HeaderWrap = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderArea = styled.div`
  width: 100%;
  max-width: 1080px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .lh-area,
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  ul {
    margin: 0 0 0 24px;
    li {
      margin: 0 20px 0 0;
      a {
        ${(props) => props.theme.fonts.S18_Bold}
        color: ${(props) => props.theme.colors.bithumbGray150};
        opacity: 0.5;
      }
      &.active {
        border-bottom: 2px solid ${(props) => props.theme.colors.bithumbGray150};
        a {
          opacity: 1;
        }
      }
    }
  }
  .rh-area {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    button {
      border: 0 none;
      background: transparent;
      &.login-trigger {
        border: 1px solid ${(props) => props.theme.colors.bithumbGray150};
        border-radius: 8px;
        color: ${(props) => props.theme.colors.bithumbGray150};
        ${(props) => props.theme.fonts.S14_Bold};
        padding: 10px 20px;
      }
      &.search-trigger {
        width: 36px;
        height: 36px;
      }
    }
    .cart-counter {
      position: relative;
      width: 24px;
      height: 24px;
      margin: 0 20px 0 10px;
    }
  }
`;
