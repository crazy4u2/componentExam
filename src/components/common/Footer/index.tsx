import Link from 'next/link';
import { isMobile } from 'react-device-detect';

import { FooterArea, FooterWrap } from './styles';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterArea>
        <div className="top-section">
          <ul>
            <li>
              <Link href="/">회사소개</Link>
            </li>
            <li>
              <Link href="/">이용약관</Link>
            </li>
            <li>
              <Link href="/">개인정보처리방침</Link>
            </li>
          </ul>
          <ul>
            <li className="icon">
              <a href="https://www.youtube.com">인스타</a>
            </li>
            <li className="icon">
              <a href="https://www.youtube.com">유튜브</a>
            </li>
          </ul>
        </div>
        <div className="info-section">
          <p className="name">(주) 빗썸라이브</p>
          <p>
            <span>대표자: 강지연</span>
            <span>주소: 서울특별시 서초구 강남대로 489 8층, 9층</span>
            <span>사업자등록번호: 190-86-01816</span>
            <span>통신판매업신고번호: 제2021-서울서초-3979호</span>
          </p>
          <p className="info-second">
            <span>고객센터: 1670-2310</span>
            <span>이메일: cs@bithumblive.com</span>
          </p>
        </div>
        <div className="bottom-section">
          <p>
            (주)빗썸라이브는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 상품, 상품정보 및 거래에 관한 의무와
            책임은 판매자에게 있습니다.
          </p>
          {/* nexjs 완 충돌이 나는것 같음 추후 확인 */}
          {/* {!isMobile && <p>Copyright 2021. bithumb Live. all rights reserved.</p>} */}
        </div>
      </FooterArea>
    </FooterWrap>
  );
};

export default Footer;
