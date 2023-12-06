import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import GuestHeader from "./components/headers/guest/GuestHeader";
import UserHeader from "./components/headers/user/UserHeader";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Calendar from "./components/calendar/Calendar";
import ClubGallery from "./components/club-gallery/clubGallery";
import HomeWrapper from "./components/home/HomeWrapper";
import AuthGuard from "./components/guards/AuthGuard";

import AuthContext from "./contexts/AuthContext";
import CreateClubForm from "./components/create-club-form/CreateClubForm";
import EditClubForm from "./components/edit-club-form/EditClubForm";
import ClubDetails from "./components/club-details/ClubDetails";
import CommentsList from "./components/comments-list/CommentsList";
import CreateCourt from "./components/create-court/CreateCourt";
import AddComment from "./components/add-comment/AddComment";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const routes = (
    <>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/clubs" element={<ClubGallery />} />
        <Route path="/club/:clubId" element={<ClubDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<AuthGuard />}>
          <Route path="/create-club" element={<CreateClubForm />} />
          <Route path="/club/:clubId/edit" element={<EditClubForm />} />
          <Route path="/club/:clubId/delete" element={<ClubDetails />} />
          <Route path="/club/:clubId/add-court" element={<CreateCourt />} />
          <Route path="/book-court" element={<Calendar />} />
        </Route>
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
