import "./App.css";
import HomeWidget1 from "./Components/Navbar/HomeWidgets/HomeWidget1";
import Banner from "./Components/Navbar/Landing-page/Banner";
import Navigation from "./Components/Navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <HomeWidget1 />
    </div>
  );
}

export default App;
