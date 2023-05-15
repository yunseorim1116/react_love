import SignIn from "@/pages/SignIn";
import UserList from "@/pages/UserList";

const MainPage = () => {
  const token = window.localStorage.getItem("token");

  return <>{token ? <UserList /> : <SignIn />}</>;
};

export default MainPage;
