import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Footer, Header, SearchArea } from '~components/common';
import useWindowDemension from '~hooks/useWindowDemension';
import { searchBarState } from '~states';

import { LayoutWrap } from './styles';

// 필요하면 더 추가되어도 상관없음.
interface Props {
  address: string;
  children: JSX.Element | JSX.Element[];
  isScroll: boolean;
}

/**
 * Header component
 * @param {boolean} isNormalOn 헤더에서 일반상품 탭을 활성화 시킴, props 의 address 에서 키워드로 검색을 하여 현재의 위치가 어딘지 파악 후 넘김
 * @param {boolean} isShortCutOn 헤더에서 숏컷상품 탭을 활성화 시킴, props 의 address 에서 키워드로 검색을 하여 현재의 위치가 어딘지 파악 후 넘김
 * @returns
 */

const Layout = ({ address, children, isScroll }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isShowSearchBar, setIsShowSearchBar] = useState<boolean>(false);
  const { height, width } = useWindowDemension();
  const [isSearchBarOn, setIsSearchBarOn] = useRecoilState(searchBarState); // 혹은 props 에서 받아서 부모로 던져서 부모에서 검색창 관리를 할 수도 있음.

  const showSearchBar = useCallback(() => {
    setIsShowSearchBar(!isShowSearchBar);
    setIsSearchBarOn(!isShowSearchBar);
  }, [isShowSearchBar]);

  useEffect(() => {
    const contentSize = sectionRef ? sectionRef.current!.offsetHeight : 0;
    let calcHeight;
    if (contentSize > height!) {
      calcHeight = 0;
    } else {
      calcHeight = height ? height - 64 - 234 : 0; // 64: 헤더 높이, 234: 푸터 높이, 추후에 상수화 필요
    }
    setContentHeight(calcHeight);
  }, [height]);

  return (
    <LayoutWrap className={isShowSearchBar ? 'overflow' : ''}>
      <Header isNormalOn={false} isShortCutOn showSearchBar={showSearchBar} />
      <section
        id="section"
        ref={sectionRef}
        style={{ minHeight: '858px', height: contentHeight ? contentHeight : 'auto' }}
      >
        {children}
      </section>
      <Footer />
      {isShowSearchBar && <SearchArea hideSearchBar={showSearchBar} />}
      {/* <Footer /> */}
    </LayoutWrap>
  );
};

export default Layout;
