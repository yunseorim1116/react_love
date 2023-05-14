
import { userType } from '@/type/userType';
import instance from '@/utils/axios';
import SwiperSlieder from '@components/common/SwiperSlieder';
import { useEffect, useState } from 'react';

const UserList = () => {

const [userDataList, setUserData] = useState<userType[]>()

    useEffect(() => {
       const getUserList = async ()=> {
       const res = await instance.get('/member/list');
       console.log(res)
       setUserData([...res])
     }

getUserList()

    },[])

    return (
        <div style={{ width : '100vw'}}>
            <SwiperSlieder cardList={userDataList?.slice(0,5)}/>
        </div>
    );
};

export default UserList;