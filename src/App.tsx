
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from '@/pages/SignUp';
import MyPage from '@/pages/MyPage';
import MainPage from './pages/MainPage';
import UserList from '@/pages/UserList';
import SignIn from '@/pages/SignIn';



const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/siginin" element={<SignIn />} />
           <Route path="/profile" element={<MyPage />} />
           <Route path="/userlist" element={<UserList />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
};

export default App;