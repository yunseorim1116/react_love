import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp';
import MyPage from '@/pages/MyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
             <Route path="/profile" element={<MyPage />} />
            </Routes>
       </BrowserRouter>
    </div>
  );
};

export default App;