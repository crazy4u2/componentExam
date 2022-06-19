import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SpoqaHanSansNeoBoldOTF from '~fonts/SpoqaHanSansNeo-Bold.otf';
import SpoqaHanSansNeoBoldWOFF from '~fonts/SpoqaHanSansNeo-Bold.woff';
import SpoqaHanSansNeoBoldWOFF2 from '~fonts/SpoqaHanSansNeo-Bold.woff2';
import SpoqaHanSansNeoLightOTF from '~fonts/SpoqaHanSansNeo-Light.otf';
import SpoqaHanSansNeoLightWOFF from '~fonts/SpoqaHanSansNeo-Light.woff';
import SpoqaHanSansNeoLightWOFF2 from '~fonts/SpoqaHanSansNeo-Light.woff2';
import SpoqaHanSansNeoRegularOTF from '~fonts/SpoqaHanSansNeo-Regular.otf';
import SpoqaHanSansNeoRegularWOFF from '~fonts/SpoqaHanSansNeo-Regular.woff';
import SpoqaHanSansNeoRegularWOFF2 from '~fonts/SpoqaHanSansNeo-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body{
    background: #2F2F2F;
  }
  a {
        text-decoration: none;
        color: inherit;
    }
  * {
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  @font-face {
    font-family: 'SpoqaNeoBold';
    src: url(${SpoqaHanSansNeoBoldWOFF2}) format('woff2'),
    url(${SpoqaHanSansNeoBoldWOFF}) format('woff'),
    url(${SpoqaHanSansNeoBoldOTF}) format('otf'),
  }
  @font-face {
    font-family: 'SpoqaNeoLight';
    src: url(${SpoqaHanSansNeoLightWOFF2}) format('woff2'),
    url(${SpoqaHanSansNeoLightWOFF}) format('woff'),
    url(${SpoqaHanSansNeoLightOTF}) format('otf'),
  }
  @font-face {
    font-family: 'SpoqaNeoRegular';
    src: url(${SpoqaHanSansNeoRegularWOFF2}) format('woff2'),
    url(${SpoqaHanSansNeoRegularWOFF}) format('woff'),
    url(${SpoqaHanSansNeoRegularOTF}) format('otf'),
  }

  * {
    box-sizing: border-box;
    font-family: 'SpoqaNeoRegular';
  }
  html, body {
    background-color: ${(props) => props.theme.colors.bithumbGray900};
  }
  a, a:hover {
    text-decoration: none;
  }
`;

export default GlobalStyle;
