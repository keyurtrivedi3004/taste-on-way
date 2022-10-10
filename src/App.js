import "./App.css";
import Navigation from "./Components/Navbar/Navigation";
import Banner from "./Components/Landing-page/Banner";
import HomeWidget1 from "./Components/HomeWidgets/HomeWidget1";
import HomeWidget2 from "./Components/HomeWidgets/HomeWidget2";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <HomeWidget1 />
      <HomeWidget2 />
      <Footer />
    </div>
  );
}

export default App;
