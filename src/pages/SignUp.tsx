import Title from "@components/common/Title";
import Button from "@components/common/Button";
import instance from "@/utils/axios";
import { useState } from "react";

const SignUp = () => {
  const [userInfo, serUserInfo] = useState({
    userId: "",
    password: "",
    nickname: "",
  });

  const [formErrors, setFormErrors] = useState({
    userId: "",
    password: "",
    nickname: "",
  });

  const userIdPattern = /^[a-zA-Z0-9]{3,10}$/; // userId: 3~10 글자, 영어 또는 숫자만 가능
  const nicknamePattern = /^[a-zA-Z0-9가-힣]{3,10}$/; // nickname: 3~10 글자, 영어, 숫자, 한글만 가능
  const passwordPattern = /^.{3,10}$/; // password: 3~10 글자

  const validateUserId = (userId: string): string => {
    if (!userIdPattern.test(userId)) {
      return "아이디는 3~10자의 영문자 또는 숫자로 이루어져야 합니다.";
    }
    return "";
  };

  const validateNickname = (nickname: string): string => {
    if (!nicknamePattern.test(nickname)) {
      return "닉네임은 3~10자의 영문자, 숫자, 한글로 이루어져야 합니다.";
    }
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!passwordPattern.test(password)) {
      return "비밀번호는 3~10자여야 합니다.";
    }
    return "";
  };

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "userId":
        return validateUserId(value);
      case "nickname":
        return validateNickname(value);
      case "password":
        return validatePassword(value);
      default:
        return "";
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    serUserInfo({ ...userInfo, [name]: value });

    const errMsg = validateInput(name, value);
    setFormErrors({ ...formErrors, [name]: errMsg });
  };

  const handleSubmit = async () => {
    try {
      const res = await instance.post("/auth/signup", userInfo);
      console.log("회원가입");
      console.log(res);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  return (
    <div>
      <Title title="회원가입" />
      <input placeholder="아이디" name="userId" onChange={handleChangeInput} />
      <p>{formErrors.userId}</p>
      <br />
      <input placeholder="비번" name="password" onChange={handleChangeInput} />
      <p>{formErrors.password}</p>
      <br />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={handleChangeInput}
      />
      <p>{formErrors.nickname}</p>
      <Button buttonText="회원가입" handleClickFunction={handleSubmit} />
    </div>
  );
};

export default SignUp;
