import Title from "@components/common/Title";
import Button from "@components/common/Button";
import instance from "@/utils/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userInfo, serUserInfo] = useState({
    userId: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    serUserInfo({ ...userInfo, [name]: value });
  };

  const handleSiginIn = async () => {
    try {
      console.log("실행");
      const res = await instance.post("/auth/signin", userInfo);

      console.log(res);

      const token = res.accessToken;
      const refreshToekn = res.refreshToken;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToekn);

      navigate("/userlist");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const handleRouteSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Title title="로그인" />
      <input placeholder="아이디" name="userId" onChange={handleChangeInput} />
      <br />
      <input
        placeholder="비번"
        name="password"
        onChange={handleChangeInput}
        type="password"
      />
      <br />
      <Button buttonText="로그인" handleClickFunction={handleSiginIn} />
      <br />
      <Button
        buttonText="회원가입 먼저 하기"
        handleClickFunction={handleRouteSignUp}
      />
    </>
  );
};

export default SignIn;
