import Title from '@components/common/Title';
import Button from '@components/common/Button';
import instance from '@/utils/interceptor';
const SignIn = () => {

    const testFuction = async ()=>{
    const res = await instance.get('/test')
     console.log(res)
    }
    return (
        <>
            <Title title='로그인'/>
            <div  onClick={testFuction}> api Test </div>

                 <input/>
                 <br/>
                 <input/>
             <br/>
            <Button buttonText='로그인'/>
              <br/>
            <Button buttonText='회원가입 먼저 하기'/>
        </>
    );
};

export default SignIn;