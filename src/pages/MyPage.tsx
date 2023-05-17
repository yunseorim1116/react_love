import { useState, useEffect } from "react";
import instance from "@/utils/axios";
import { userType } from "@/type/userType";
import Button from "@components/common/Button";
import UserProfile from "@components/mypage/UserProfile";
import { useNavigate } from "react-router-dom";
import ProfileModal from "@components/mypage/ProfileModal";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<userType>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const getUserList = async () => {
      const res = await instance.get("/auth/user");
      console.log(res);
      setUserInfo({ ...res });
    };
    console.log("1");
    getUserList();
  }, []);

  const handleOpenModal = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>마이페이지</h1>
        <UserProfile imgSrc={userInfo?.profileImgUrl} />
        <span>{userInfo?.nickname}</span>{" "}
        <div
          onClick={() => {
            setIsOpen(true);
          }}
        >
          수정하기
        </div>
        <div style={{ display: "blcok " }}>
          <Button
            buttonText="내가 좋아한 사람"
            handleClickFunction={() => {
              navigate("/sendlist");
            }}
          />
        </div>
        <div style={{ display: "blcok " }}>
          <Button
            buttonText="내가 좋아한 사람"
            handleClickFunction={() => {
              navigate("/recievelist");
            }}
          />
        </div>
        <Button buttonText="로그아웃" />
      </div>
      {isOpen && <ProfileModal closeModal={handleOpenModal} />}
    </div>
  );
};

export default MyPage;
