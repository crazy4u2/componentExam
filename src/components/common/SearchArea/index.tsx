import Link from 'next/link';
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Icon, Text } from '~components/common';
import { searchKeywordState } from '~states';
import { theme } from '~styles/theme';

interface Props {
  hideSearchBar: () => void;
}

const SearchArea: FC<Props> = ({ hideSearchBar }) => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  return (
    <SearchWrapper>
      <div className="">
        <AltHeader>
          <h1>
            <Link href="/">
              <a>
                <Icon name="logo" />
              </a>
            </Link>
          </h1>
          <div className="wrapper-input">
            <div>
              <button className="search-trigger">
                <Icon name="search" />
              </button>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              {searchKeyword && (
                <button className="cancel-trigger" onClick={() => setSearchKeyword('')}>
                  <Icon name="cancel" />
                </button>
              )}
            </div>
            <button className="close-trigger" onClick={hideSearchBar}>
              취소
            </button>
          </div>
        </AltHeader>
        <WordList>
          <Text as="h2" color="bithumbWhite" font="S16_Bold" className="recent-title">
            최근 검색어
          </Text>
          <ul>
            <Text as="li">
              검색어
              <button>
                <Icon name="delete" />
              </button>
            </Text>
          </ul>
          <button className="delete-all">전체삭제</button>
        </WordList>
      </div>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  color: #fff; // temp
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  > div {
    width: 100%;
    background-color: ${(props) => props.theme.colors.bithumbGray900};
  }
`;

const AltHeader = styled.div`
  height: 64px;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .wrapper-input {
    margin: 0 0 0 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 602px;
    height: 40px;
    > div {
      max-width: 560px;
      width: 100%;
      height: 40px;
      background-color: ${(props) => props.theme.colors.bithumbGray850};
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0 14px 0 12px;
      /* .search-trigger,
      .cancel-trigger {
        height: 24px;
      } */
      input[type='text'] {
        background-color: transparent;
        border: 0 none;
        height: 40px;
        color: #fff;
        ${(props) => props.theme.fonts.S16_Regular};
        width: 100%;
        &::placeholder {
          color: ${(props) => props.theme.colors.bithumbGray600};
        }
      }
    }
    .close-trigger {
      color: ${(props) => props.theme.colors.bithumbGray600};
      ${(props) => props.theme.fonts.S16_Regular};
    }
  }
`;

const WordList = styled.div`
  max-width: 560px;
  margin: 45px auto 0;
  padding: 0 0 32px 0;
  position: relative;
  ul {
    width: 100%;
    max-width: 560px;
    margin: 20px 0 0 0;
  }
  li {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 0 0;
  }
  .delete-all {
    position: absolute;
    right: 0;
    top: 0;
    color: ${(props) => props.theme.colors.bithumbGray450};
    ${(props) => props.theme.fonts.S12_Regular};
  }
`;

export default SearchArea;
