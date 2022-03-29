import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOG_IN } from "../reducer/userInfoReducer";
import type { AppDispatch } from "../store";

import { axios_GetKakaoToken, axios_GetUser_TOKakaoToken } from "../axios";

const qs = require("qs");

function CallbackGoogle() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const code: any = new URLSearchParams(window.location.search).get("code");
  console.log("받음 code :", code);
  useEffect(() => {
    if (code) {
      console.log("useEffect if 문이 실행됨?");
      axios_GetKakaoToken(code).then((res) => {
        axios_GetUser_TOKakaoToken(
          res.data.access_token,
          res.data.refresh_token
        ).then((res) => {
          const { id, image, nickname } = res.data.user;
          dispatch(
            LOG_IN({
              id,
              nickname,
              image,
            })
          );
          navigate("/main");
        });
      });
    }
  }, []);

  return <div></div>;
}

export default CallbackGoogle;
