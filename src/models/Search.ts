import { DefaultResponse } from './Common';

interface SearchImagesRes {
  imageNo: number;
  url: string;
  isMain: 'true' | 'false';
}

interface SearchGoodsRes {
  goodsId: string;
  name: string;
  sellFlag: 'Y' | 'N';
  display: null;
  reserveTf: null;
  shortcutUrl: string;
  sellPrice: number;
  finalPrice: number;
  discountPercent: number;
  placeName: string;
  type: 'GENERAL' | 'SHORTCUT';
  images: SearchImagesRes[];
}

export interface SearchResultRes {
  totalCount: number;
  generalGoodsCount: number;
  shortcutGoodsCount: number;
  currentTotalPageCount: number;
  allGoods: SearchGoodsRes[];
  generalGoods: SearchGoodsRes[];
  shortcutGoods: SearchGoodsRes[];
}

export interface SearchGoodsReq {
  devUuid: string;
  type: 'A' | 'G' | 'N';
  keyword: string;
  pageNum: number;
  pageSize: number;
}

export type SearchDataPromise = DefaultResponse<SearchResultRes>;
