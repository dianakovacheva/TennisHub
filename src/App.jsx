import "./App.css";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import SideForms from "./components/Forms/SideFormsView";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Navigation />
      {/* <SideForms /> */}
      <Home />
      {/* <PageNotFound /> */}
      <Footer />
    </>
  );
}

export default App;
