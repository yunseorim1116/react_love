import Title from '@components/common/Title';
import Button from '@components/common/Button';
import instance from '@/utils/axios';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
 const navigate = useNavigate();

    const testFuction = async ()=>{
    const res = await instance.get('/test')
     console.log(res)
    }

    const handleSiginIn = async()=>{
       try {
       const res = await instance.post('/siginin');
       console.log(res)
         } catch (e) {
          console.log(e)
          throw e;
        }
    }

    const handleRouteSignUp = ()=>{
     navigate("/signup");
    }

    return (
        <>
            <Title title='로그인'/>d
            <div onClick={testFuction}> api Test </div>
                 <input/>
                 <br/>
                 <input/>
             <br/>
            <Button buttonText='로그인' handleClickFunction={handleSiginIn} />
              <br/>
            <Button buttonText='회원가입 먼저 하기' handleClickFunction={handleRouteSignUp}/>
        </>
    );
};

export default SignIn;