import { atom } from 'recoil';

/**
 * loginState state
 * @param {string} key 해당 상태에 대해 조회하는 키
 * @param {boolean} default 해당 상태의 값
 */
const loginState = atom({
  key: 'loginState',
  default: false,
});

/**
 * searchBarState state
 * @param {string} key 해당 상태에 대해 조회하는 키
 * @param {boolean} default 해당 상태의 값, 열렸는지 닫혔는지
 */
const searchBarState = atom({
  key: 'searchBarState',
  default: false,
});

/**
 * cartCountState state
 * @param {string} key 해당 상태에 대해 조회하는 키
 * @param {number} default 해당 상태의 값, 장바구니에 담긴 상품의 갯수, 상황에 따라서 props 로 내릴 수 도 있지 않을까?
 */
const cartCountState = atom({
  key: 'cartCountState',
  default: 0,
});

/**
 * searchKeywordState
 * @param {string} key 해당 상태에 대해 조회하는 키
 * @param {string} default 검색어
 */

const searchKeywordState = atom({
  key: 'searchKeywordState',
  default: '',
});

export { loginState, searchBarState, cartCountState, searchKeywordState };
