import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "@/pages/SignUp";
import MyPage from "@/pages/MyPage";
import MainPage from "./pages/MainPage";
import UserList from "@/pages/UserList";
import SignIn from "@/pages/SignIn";
import SendList from "@/pages/SendList";
import ReceiveList from "@/pages/ReceiveList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/siginin" element={<SignIn />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/sendlist" element={<SendList />} />
          <Route path="/recievelist" element={<ReceiveList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
