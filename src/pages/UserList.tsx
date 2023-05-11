
import { userType } from '@/type/userType';
import instance from '@/utils/axios';
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
        <div>
{
    userDataList?.map((user : userType)=>{

        return <div>닉네임 : {user.nickname}</div>
    })
}
        </div>
    );
};

export default UserList;