import Link from 'next/link';
import React, { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { useRecoilState } from 'recoil';
import { Icon, Text } from '~components/common';
import { loginState, searchBarState } from '~states';

import { HeaderArea, HeaderWrap } from './styles';

// 언젠가 api 에서 tab 정보를 내려줄 수 도 있음.
interface Props {
  isNormalOn: boolean;
  isShortCutOn: boolean;
  isSubMenuShow?: boolean;
  showSearchBar: () => void;
}

const Header: FC<Props> = ({
  isNormalOn = false,
  isShortCutOn = false,
  isSubMenuShow = false,
  showSearchBar,
}: Props) => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isSearchBarOn, setIsSearchBarOn] = useRecoilState(searchBarState); // 혹은 props 에서 받아서 부모로 던져서 부모에서 검색창 관리를 할 수도 있음.

  return (
    <HeaderWrap>
      {isSearchBarOn || (
        <HeaderArea>
          <div className="lh-area">
            <h1>
              <Link href="/">
                <a>
                  <Icon name="logo" />
                </a>
              </Link>
            </h1>
            <ul className="categories">
              <li className={isNormalOn ? 'active' : ''}>
                <Link href="/">일반상품</Link>
              </li>
              <li className={isShortCutOn ? 'active' : ''}>
                <Link href="/">숏컷</Link>
              </li>
            </ul>
          </div>

          <div className="rh-area">
            <button className="search-trigger" onClick={showSearchBar}>
              <Icon name="search" />
            </button>
            <div className="cart-counter">
              <Link href="/">
                <a>
                  <Icon name="cart" />
                </a>
              </Link>
            </div>
            {isLogin ? (
              <button className="login">
                <Icon name="my" />
              </button>
            ) : (
              <button className="login-trigger">로그인</button>
            )}
          </div>
        </HeaderArea>
      )}
    </HeaderWrap>
  );
};

export default Header;
