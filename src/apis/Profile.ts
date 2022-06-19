import { UserProfilePromise } from '~models/Profile';
import { AxiosInstance } from '~utils/Axios';

// 사용자 프로필 조회
export const getProfile = async () => {
  const {
    data: { resultData },
  } = await AxiosInstance.get<UserProfilePromise>('/users');
  return resultData;
};
