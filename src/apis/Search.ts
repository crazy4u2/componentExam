import * as searchModel from '~models/Search';
import { AxiosInstance } from '~utils/Axios';

export async function search(params: searchModel.SearchGoodsReq) {
  const {
    data: { resultData },
  } = await AxiosInstance.get<searchModel.SearchDataPromise>('/');
  return resultData;
}
