import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import SideForms from "./components/formHolder/SideFormsView";
import Home from "./components/home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <>
      <Navigation />
      {/* <SideForms /> */}
      <Home />
      {/* <Calendar /> */}
      {/* <PageNotFound /> */}
      <Footer />
    </>
  );
}

export default App;
