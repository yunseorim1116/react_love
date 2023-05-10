import Title from '@components/common/Title';
import Button from '@components/common/Button';
import instance from '@/utils/axios';
import { useState } from 'react';

const SignUp = () => {

  const [userInfo,serUserInfo] = useState({
    userId:'',
    password:'',
    nickname:'',
  })

  const setUserInfo = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name ,value} = e.target
    serUserInfo({...userInfo, [name] : value})
  }

  const handleSiginIn = async () => {

         try {
            const res = await instance.post('/auth/signup', userInfo);
        console.log(res)
         } catch (e) {
          console.log(e)
         throw e;
       }
   }

    return (
        <div>
      <Title title='회원가입'/>
         <input placeholder='아이디' name='userId' onChange={setUserInfo}/>
           < br/>
         <input placeholder='비번' name='password' onChange={setUserInfo}/>
          < br/>
         <input placeholder='닉네임' name='nickname' onChange={setUserInfo}/>
         <Button buttonText='회원가입' handleClickFunction={handleSiginIn}/>
        </div>
    );
};

export default SignUp;