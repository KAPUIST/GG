import { AxiosRequestConfig } from "axios";

type InitialState = {
  test: { id: number; name: string; quan: number }[];
  count: number;
  userInfo: {
    id: number | string;
    nickname: string;
    image: string;
    accessToken: AxiosRequestConfig<any> | string | undefined | any;
    loginType: string;
  };
  isLogin: boolean;
  notification: [];
  shareRecord:
    | { genre: string; weight: number; count: number; time_record: number }[]
    | null;
  shareRecordId: string | number;
  postId: number | null;
};

export const initialState: InitialState = {
  test: [
    { id: 0, name: "멋진신발", quan: 2 },
    { id: 1, name: "예쁜신발", quan: 3 },
  ],
  count: 0,
  userInfo: { id: "", nickname: "", image: "", accessToken: "", loginType: "" },
  isLogin: false,
  notification: [],
  shareRecord: null,
  shareRecordId: "",
  postId: null,
};
