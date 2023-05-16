import { userType } from "@/type/userType";
import instance from "@/utils/axios";
import SwiperSlieder from "@components/common/SwiperSlieder";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [userDataList, setUserData] = useState<userType[] | []>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getUserList = async () => {
      try {
        const res = await instance.get("/member/list");
        console.log(res);
        setUserData([...res]);
      } catch (e) {
        console.log(e);
        setUserData([]);
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    getUserList();
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <SwiperSlieder cardList={userDataList?.slice(0, 5)} />
    </div>
  );
};

export default UserList;
