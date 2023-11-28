import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import GuestHeader from "./components/headers/guest/GuestHeader";
import UserHeader from "./components/headers/user/UserHeader";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Calendar from "./components/calendar/Calendar";

import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const routes = (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/book-court" element={<Calendar />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );

  return (
    <>
      {!isAuthenticated && <GuestHeader>{routes}</GuestHeader>}
      {isAuthenticated && <UserHeader>{routes}</UserHeader>}

      <Footer />
    </>
  );
}

export default App;
