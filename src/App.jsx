import "./App.css";
import Footer from "./components/Footer";
import SideForms from "./components/Forms/SideFormsView";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
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
