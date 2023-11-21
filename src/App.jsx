import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import SideForms from "./components/formHolder/SideFormsView";
import Home from "./components/home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Calendar from "./components/calendar/Calendar";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <>
        <Navigation />
        {/* <SideForms /> */}
        <Home />
        {/* <Calendar /> */}
        {/* <PageNotFound /> */}
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
