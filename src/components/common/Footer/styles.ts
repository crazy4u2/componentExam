import styled from 'styled-components';

export const FooterWrap = styled.footer`
  background: ${(props) => props.theme.colors.bithumbGray950};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 40px 0 58px;
`;

export const FooterArea = styled.div`
  width: 100%;
  max-width: 1080px;
  .top-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      li {
        padding: 0 16px 0 0;
        margin: 0 12px 0 0;
        &.icon {
          padding: 0;
          margin: 0 0 0 12px;
        }
      }
      a {
        color: #fff;
        ${(props) => props.theme.fonts.S12_Regular};
      }
    }
  }
  .info-section {
    margin: 20px 0 0 0;
    color: ${(props) => props.theme.colors.bithumbGray400};
    p {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin: 12px 0 0 0;
      ${(props) => props.theme.fonts.S12_Regular};
      &.name {
        margin: 0;
      }
      &.info-second {
        margin: 10px 0 0 0;
      }
      span {
        margin: 0 16px 0 0;
      }
    }
  }
  .bottom-section {
    margin: 18px 0 0 0;
    ${(props) => props.theme.fonts.S10_Regular};
    color: ${(props) => props.theme.colors.bithumbGray500};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
