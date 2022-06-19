import { DefaultResponse } from './Common';

export interface UserProfileRes {
  userPid: number;
  userId: string;
  email: string;
  name: string;
  type: string;
  birthday: string;
  sex: string;
  tel?: string;
  mobile: string;
  zip?: string;
  addr?: string;
  addr2?: string;
  photo?: string;
  imageUrl: string;
  nickname: string;
  displayable: boolean;
  authYn: boolean;
  stateText?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  joinPath?: string;
  regDate: string;
  usable: boolean;
  adultYn: boolean;
  adultCompleteDate?: null;
  userAgreement: [
    {
      id: number;
      userPid: number;
      serviceAgree: boolean;
      mobileAuthAgree: boolean;
      marketingAgree: boolean;
      regDate: string;
      modDate: string;
    }
  ];
  userPhotos: [
    {
      id: number;
      userPid: number;
      rpntYn: string;
      imageUrl: string;
      regDate: string;
    }
  ];
  roles?: string;
}

export type UserProfilePromise = DefaultResponse<UserProfileRes>;
