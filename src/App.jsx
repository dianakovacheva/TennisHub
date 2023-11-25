import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Home from "./components/home/Home";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <AuthProvider>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/book-court" element={<Calendar />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
